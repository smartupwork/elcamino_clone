<?php

namespace App\Http\Livewire\Calculator;

use App\Models\Calculation;
use Livewire\Component;

class Expenses extends Component
{
    public $expenses = [];
    public ?Calculation $calculation;
    public $categories;

    public function mount($calculation)
    {
        $this->calculation = $calculation;

        $this->categories = config('constants.expense_categories');
        $this->expenses = $this->calculation?->expenses;

        if(!$this->expenses){
            foreach ($this->categories as $key => $category){
                $this->expenses[] = [
                    'category' => $key,
                    'value' => 0
                ];
            }
        }
    }

    public function render()
    {
        $data = array();
        return view('livewire.calculator.expenses', $data);
    }

    public function remove($i)
    {
        unset($this->expenses[$i]);
        $this->emit('updateTotal');
    }

    public function add()
    {
        $this->expenses[] = [
            'category' => '',
            'value' => '',
        ];

        $this->emit('refreshSlider');
    }
}
