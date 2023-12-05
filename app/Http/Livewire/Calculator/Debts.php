<?php

namespace App\Http\Livewire\Calculator;

use App\Models\Calculation;
use Livewire\Component;

class Debts extends Component
{
    public ?Calculation $calculation;
    public $debts = [];

    public function mount($calculation)
    {
        $this->calculation = $calculation;
        $this->debts = $this->calculation?->debts;

        if (!$this->debts){
            $this->add();
        }
    }

    public function render()
    {
        $data = array();
        return view('livewire.calculator.debts', $data);
    }

    public function remove($i)
    {
        unset($this->debts[$i]);
        $this->emit('updateTotal');
    }

    public function add()
    {
        $this->debts[] = [
            'description' => '',
            'value' => '',
        ];

        $this->emit('refreshSlider');
    }
}
