<?php

namespace App\Http\Controllers;

use App\Helpers\Calculator;
use App\Models\Calculation;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Illuminate\Support\Facades\Validator;

class CalculationController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Calculation::class, 'calculation');
    }

    public function index()
    {
        $calculations = Calculation::relative()->with('user')->latest()->paginate(25);
        return view('calculation.index', compact('calculations'));
    }

    public function create()
    {
        $data = array();
        $data['steps'] = array(
            1 => [
                'name' => 'income',
                'title' => 'Income',
                'description' => 'Please provide your annual income',
                'current' => true,
            ],
            2 => [
                'name' => 'expenses',
                'title' => 'Expenses',
                'description' => 'Please provide your expenses',
            ],
            3 => [
                'name' => 'assets',
                'title' => 'Assets',
                'description' => 'Please provide your assets',
            ],
            4 => [
                'name' => 'debts',
                'title' => 'Debts',
                'description' => 'Please provide your debts',
            ],
            5 => [
                'name' => 'goals',
                'title' => 'Goals',
                'description' => 'Please provide your goals',
            ],
             6=> [
                'name' => 'retirement',
                'title' => 'Retirement',
                'description' => 'Please review your retirement assumptions',
            ],
        );
        
        
        $data['calculation'] = auth()->user()->lastCalculation;
        return view('calculation.form', $data);
    }

    public function copy($id)
    {
        $data = array();
        $data['steps'] = array(
            1 => [
                'name' => 'income',
                'title' => 'Income',
                'description' => 'Please provide your annual income',
                'current' => true,
            ],
            2 => [
                'name' => 'expenses',
                'title' => 'Expenses',
                'description' => 'Please provide your expenses',
            ],
            3 => [
                'name' => 'assets',
                'title' => 'Assets',
                'description' => 'Please provide your assets',
            ],
            4 => [
                'name' => 'debts',
                'title' => 'Debts',
                'description' => 'Please provide your debts',
            ],
            5 => [
                'name' => 'goals',
                'title' => 'Goals',
                'description' => 'Please provide your goals',
            ],
             6=> [
                'name' => 'retirement',
                'title' => 'Retirement',
                'description' => 'Please review your retirement assumptions',
            ],
        );

        $data['calculation'] = calculation::where('id',$id)->first();
        return view('calculation.form', $data);
    }
    public function update_snapshot($id)
    {
        $data = array();
        $data['steps'] = array(
            1 => [
                'name' => 'income',
                'title' => 'Income',
                'description' => 'Please provide your annual income',
                'current' => true,
            ],
            2 => [
                'name' => 'expenses',
                'title' => 'Expenses',
                'description' => 'Please provide your expenses',
            ],
            3 => [
                'name' => 'assets',
                'title' => 'Assets',
                'description' => 'Please provide your assets',
            ],
            4 => [
                'name' => 'debts',
                'title' => 'Debts',
                'description' => 'Please provide your debts',
            ],
            5 => [
                'name' => 'goals',
                'title' => 'Goals',
                'description' => 'Please provide your goals',
            ],
             6=> [
                'name' => 'retirement',
                'title' => 'Retirement',
                'description' => 'Please review your retirement assumptions',
            ],
        );
        $data['calculation'] = calculation::where('id',$id)->first();
        return view('calculation.form', $data,compact('id'));
    }

    public function store(Request $request)
    {
        // $rules = [
        //     'pre_retirement' => 'required',
        //     'post_retirement' => 'required',
        //     'inflation' => 'required',
        //     'retirement_age' => 'required',
        //     'wage_replacement_ratio' => 'required',
        // ];
        //     $validator = Validator::make($request->all(), $rules);
        //     if ($validator->fails()) {
        //         return redirect()->back()->with('error', 'Please fill all the fields');
        //     }
            $income     = $request->income;
            $goals      = $request->goals;
            $assets     = array_values($request->assets);
            $expenses   = array_values($request->expenses);
            $debts      = array_values($request->debts);
            $name       = $request->name;
            $scenario   = $request->scenario;
            $pre_retirement             = $request->pre_retirement;
            $post_retirement            = $request->post_retirement;
            $inflation                  = $request->inflation;
            $retirement_age             = $request->retirement_age;
            $wage_replacement_ratio     = $request->wage_replacement_ratio;
            
         
        if(request('last_inserted_id')==0 && request('update_id')==null) {
            
             $calculation = auth()->user()->calculations()->create(array(
               'income'     =>$income,
                'goals'     =>$goals,
                'assets'    =>$assets,
                'expenses'  =>$expenses,
                'debts'     =>$debts,
                'name'      =>$name,
                'scenario'  =>$scenario,
                'pre_retirement'         =>$pre_retirement,
                'post_retirement'        =>$post_retirement,
                'inflation'              =>$inflation,
                'retirement_age'         =>$retirement_age,
                'wage_replacement_ratio' =>$wage_replacement_ratio
                

            ));
            $calculator = new Calculator($calculation);
            $calculator->saveResults();
            
        }else{
            $calculation = Calculation::where('id', request('update_id'))->first();
            $calculation->income = $income;
            $calculation->goals = $goals;
            $calculation->assets = $assets;
            $calculation->expenses = $expenses;
            $calculation->debts = $debts;
            $calculation->name = $name;
            $calculation->scenario = $scenario;
            $calculation->pre_retirement         =$pre_retirement;
            $calculation->post_retirement        =$post_retirement;
            $calculation->inflation              =$inflation;
            $calculation->retirement_age         =$retirement_age;
            $calculation->wage_replacement_ratio =$wage_replacement_ratio;
            $calculation->update();

            $calculator = new Calculator($calculation);

            $calculator->saveResults();
        }
            $id = auth()->user()->id;
            $dob                   = User::find($id);
            $dob->dob        = $request->dob;
            $dob->save();

        return view('calculation.show', compact('calculation'));
    }



    public function show(Calculation $calculation)
    {
        $data = array();

        $calculator = new Calculator($calculation);
        $calculator->getRetirementPlan();
        return view('calculation.show', compact('calculation'));
    }

    public function ajax_save(Request $request){

        if(request('last_inserted_id')==0){
            $calculation = auth()->user()->calculations()->create($request->only([
                'income', 'goals', 'assets', 'expenses', 'debts', 'name','scenario','pre_retirement','post_retirement','inflation','retirement_age','wage_replacement_ratio'
            ]));

            $calculator = new Calculator($calculation);
            $calculator->saveResults();

            $id = auth()->user()->id;
            $dob                   = User::find($id);
            $dob->dob        = $request->dob;
            $dob->save();

            $message['succuess'] = 'succuess';
            $message['last_id'] = $calculation->id;
            return Response()->json($message);

        }else{

            $calculations = Calculation::where('id', request('last_inserted_id'))->first();
            $calculation = $calculations->update($request->only([
                'income', 'goals', 'assets', 'expenses', 'debts', 'name','scenario','pre_retirement','post_retirement','inflation','retirement_age','wage_replacement_ratio',
            ]));

            $calculator = new Calculator($calculations);

            $calculator->saveResults();
            
            $id = auth()->user()->id;
            $dob                   = User::find($id);
            $dob->dob        = $request->dob;
            $dob->save();

            $message['last_id'] = request('last_inserted_id');
            $message['succuess'] = 'success';
            return Response()->json($message);

        }
       

    }

    public function edit(Calculation $calculation)
    {
        //
    }

    public function update(Request $request, Calculation $calculation)
    {
        //
    }

    public function destroy(Calculation $calculation)
    {
        $calculation->delete();
        return redirect()->back()->with('success', 'Calculation removed');
    }
    public function generateCSV(Request $request)
    {
        // $id = Auth::user()->id;
        $fileName = 'tasks.csv';
        $calculations = Calculation::relative()->with('user')->latest()->get();


        $headers = array(
            "Content-type"        => "text/csv",
            "Content-Disposition" => "attachment; filename=$fileName",
            "Pragma"              => "no-cache",
            "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
            "Expires"             => "0"
        );

        $columns = array('User Name','Plan Name', 'Net Worth', 'Savings', 'Cash Flow', 'Debt To Income Ratio', 'Emergency Fund Ratio', 'Updated');

        $callback = function () use ($calculations, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);
            foreach ($calculations as $calculation) {

                $row['User Name']    = $calculation->user->first_name.' '.$calculation->user->last_name;
                $row['Plan Name']    = $calculation->name;
                $row['Net Worth']    = number_format($calculation->results->net_worth);
                $row['Goals']    = implode($calculation->goals);
                $row['Savings']  = $calculation->results->savings;
                $row['Cash Flow']  = $calculation->results->cash_flow;
                $row['Debt To Income Ratio']  = $calculation->results->debt_2_income_ratio;
                $row['Emergency Fund Ratio']  = $calculation->results->emergency_fund_ratio;
                $row['Updated']  = $calculation->created_at->diffForHumans();

                fputcsv($file, array($row['User Name'], $row['Plan Name'], $row['Net Worth'], $row['Savings'], $row['Cash Flow'], $row['Debt To Income Ratio'], $row['Emergency Fund Ratio'], $row['Updated']));
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }
    public function googleLineChart(Calculation $calculation)
    {
 
        $income=0;
        $expense=0;
        $debt=0;
        $asset=0;
        $id = Auth::user()->id;
        $name = Auth::user()->first_name;
        $calculation1 = Calculation::where('id',1)->first()->get();
        foreach($calculation1 as $visit){
            $income = $visit['income'];
           
        }
            
      foreach($calculation1 as $vist){
            $expenses = $vist['expenses'];
            $expense = 0;
            foreach($expenses as $key=>$retirement){

                // $record =  json_decode($value);
                    $expense = $expense+$retirement['value'];

                }
       }
   
       foreach($calculation1 as $vist){
            $debts = $vist['debts'];
            $debt = 0;
            foreach($debts as $key=>$value){

                    $debt = $debt+$value['value'];

                }
        }
        foreach($calculation1 as $vist){
            $assets = $vist['assets'];
            $asset = 0;
            foreach($assets as $key=>$retirement){

                    $asset = $asset+$value['value'];

                }
        }
  
        $result[] = ['name'=>$name,'income'=>$income,'expense'=>$expense,'debt'=>$debt,'assets'=>$asset];
        $calculator = new Calculator($calculation);
        $calculator->getRetirementPlan();
        $assets = new Calculator($calculation);
        $assets->getTotalAssets();
        $debt = new Calculator($calculation);
        $debt->getTotalDebts();
        // dd($assets);
        // exit;
        return view('calculation.barchart', compact('result','calculation','assets','debt'));
    }
}
