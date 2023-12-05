<?php

namespace App\Helpers;

use App\Models\Calculation;
use Illuminate\Http\Request;
use MathPHP\Finance;
use App\Models\User;
/**
 * @property mixed $totalIncome
 * @property int|mixed $totalExpenses
 * @property int|mixed $totalAssets
 * @property array $goals
 * @property Calculation $calculation
 * @property int|mixed $totalDebts
 * @property void $savings
 * @property float|int $netWorth
 * @property void $debt2IncomeRatio
 * @property void $emergencyFundRatio
 * @property void $cashFlow
 * @property void $assetsGraphData
 * @property float|int $monthlyIncome
 * @property int|mixed $age
 */
class Calculator
{

    public function __construct(Calculation $calculation)
    {
        $this->calculation = $calculation;

        $this->age = auth()->user()->age ?? 35;
        $this->totalIncome = $calculation->income ?? 0;
        $this->monthlyIncome = $this->totalIncome/12;
        $this->totalExpenses = $this->getTotalExpenses();
        $this->totalDebts = $this->getTotalDebts();
        $this->totalAssets = $this->getTotalAssets();
        $this->goals = $this->getGoals();

        $this->netWorth = $this->getNetWorth();
        $this->savings = $this->getSavings();
        $this->debt2IncomeRatio = $this->getDebt2Income();
        $this->emergencyFundRatio = $this->getEmergencyFundRatio();
        $this->cashFlow = $this->getCashFlow();
        $this->assetsGraphData = $this->getAssetsGraphData();
    }

    public function getTotalExpenses()
    {
        $total = 0;
        $expenses = $this->calculation->expenses;

        foreach ($expenses as $expense) {
            $total += $expense['value'];
        }

        return $total;
    }

    public function getTotalDebts()
    {
        $total = 0;
        $debts = $this->calculation->debts;

        foreach ($debts as $debt) {
            $total += $debt['value'];
        }

        return $total;
    }

    public function getTotalAssets()
    {
        $total = 0;
        $assets = $this->calculation->assets;

        foreach ($assets as $asset) {
            $total += $asset['value'];
        }

        return $total;
    }

    public function getAssetsByCategories($categories)
    {
        $total = 0;
        $assets = $this->calculation->assets;

        $categories = is_array($categories) ? $categories : [$categories];

        foreach ($assets as $asset) {
            if (in_array($asset['category'], $categories)) {
                $total += $asset['value'];
            }
        }

        return $total;
    }

    public function getExpensesByCategories($categories)
    {
        $total = 0;
        $expenses = $this->calculation->expenses;

        $categories = is_array($categories) ? $categories : [$categories];

        foreach ($expenses as $expense) {
            if (in_array($expense['category'], $categories)) {
                $total += $expense['value'];
            }
        }

        return $total;
    }

    public function getGoals()
    {
        $goals = array();

        $goalsInput = $this->calculation->goals;

        if (!$goalsInput){
            return $goals;
        }

        foreach ($goalsInput as $goalInput) {
            $goals[] = $goalInput;
        }

        return $goals;
    }

    public function getDebt2Income()
    {
        $expensesCategories = [
            'auto_loan',
            'credit_card_interest',
            'housing',
            'student_loans',
            'credit_card_payments',
            'personal_loan'
        ];

        if ($this->monthlyIncome == 0){
            return 0;
        }

        $expenseByCategories = $this->getExpensesByCategories($expensesCategories);
        $debt2Income = ($expenseByCategories / $this->monthlyIncome) * 100;
        return round($debt2Income, 2);
    }

    public function getNetWorth(): int
    {
        return round($this->totalAssets - $this->totalDebts);
    }

    private function getSavings()
    {
        $savings = $this->getExpensesByCategories('savings');

        if ($this->monthlyIncome == 0){
            return 0;
        }

        return round(
            ($savings / $this->monthlyIncome) * 100,
            2
        );
    }

    private function getEmergencyFundRatio()
    {
        $liquidAssets = $this->getAssetsByCategories('liquid');
        $essentialExpenses = $this->getEssentialExpenses();

        if ($essentialExpenses == 0){
            return 0;
        }

        return round($liquidAssets / $essentialExpenses, 2);
    }

    private function getCashFlow(): int
    {
        return round($this->monthlyIncome - $this->totalExpenses);
    }

    private function getAssetsGraphData()
    {
        $data = array();
        $assets = $this->calculation->assets;

        foreach ($assets as $asset){
            $data['series'][] = $asset['value'];
            $data['labels'][] = $asset['description'];
        }

        return $data;
    }

    private function getEssentialExpenses()
    {
        $essential_categories = [
            'credit_card_interest',
            'gas',
            'groceries',
            'housing',
            'insurance_premiums',
            'home',
            'bills',
            'student_loans',
            'education',
            'personal_loan',
            'credit_card_payments',
            'other_essentials',
        ];

        return $this->getExpensesByCategories($essential_categories);
    }

    public function saveResults()
    {
        $this->calculation->update([
            'results' => [
                'net_worth' => $this->netWorth,
                'debt_2_income_ratio' => $this->debt2IncomeRatio,
                'emergency_fund_ratio' => $this->emergencyFundRatio,
                'cash_flow' => $this->cashFlow,
                'savings' => $this->savings,
                'assets_graph_data' => $this->assetsGraphData,
                'retirement_plan' => $this->getRetirementPlan()
            ]
        ]);
    }

    public function getRetirementPlan()
    {
        /*constants */
        /* To get dynamic values of different percentage for each user */
        $id = Auth()->user()->id;
        $user = User::where('id', $id)->first();
        $pre_retirement_expected_return = $this->calculation->pre_retirement;
        if ($pre_retirement_expected_return>0 ){
            $pre_retirement_expected_return = $this->calculation->pre_retirement;
        }else{
            $pre_retirement_expected_return = $user->pre_retirement;
        }
        $post_retirement_expected_return_percentage = percent($this->calculation->post_retirement);
        if ($post_retirement_expected_return_percentage >0){
            $post_retirement_expected_return_percentage = percent($this->calculation->post_retirement);
        }else{
            $post_retirement_expected_return_percentage = percent($user->post_retirement);
        }
        $inflation_percentage = percent($this->calculation->inflation);
        if ($inflation_percentage >0){
            $inflation_percentage = percent($this->calculation->inflation);
        }else{
            $inflation_percentage = percent($user->inflation);
        }
        $avg_age = 79;
        $current_savings = $this->getAssetsByCategories('retirement');
        $salary = $this->totalIncome;
        $wage_replacement =$this->calculation->wage_replacement_ratio;
        if ($wage_replacement >0){
            $wage_replacement_ratio = percent($this->calculation->wage_replacement_ratio, $salary);
        }else{
            $wage_replacement_ratio = percent($user->wage_replacement_ratio, $salary);
        }
        $retirement_age = $this->calculation->retirement_age;
        $current_age = $this->age;
        if ($retirement_age>0){
            $years_until_retirement = $retirement_age - $current_age;
            $retirement_years = $avg_age - $retirement_age;
        }else{
            $retirement_age = $user->retirement_age;
            $years_until_retirement = $retirement_age - $current_age;
            $retirement_years = $avg_age - $retirement_age;
        }
        $salary_fv = Finance::fv(
            $inflation_percentage,
            $years_until_retirement,
            0,
            - $wage_replacement_ratio,
            0
        );
        $inflation_adjusted_return = inflationAdjustedReturn(
            $post_retirement_expected_return_percentage,
            $inflation_percentage
        );
        $pv = Finance::pv(
            percent($inflation_adjusted_return),
            $retirement_years,
            -$salary_fv,
            0,
            1
        );
        $pmt = Finance::pmt(
            percent($pre_retirement_expected_return/12),
            $years_until_retirement * 12,
            -$current_savings,
            $pv,
            0
        );
        $required_monthly_savings = round($pmt * -1, 2);
        if($current_savings>0){
            $progress = percentage($current_savings/$pv, 2);
        }else{
            $progress = 0;
        }
        return [
            'current_savings' => $current_savings,
            'required_monthly_savings' => $required_monthly_savings,
            'progress' => $progress,
            'age' => $current_age,
            'years_until_retirement' => $years_until_retirement,
        ];
    }

}
