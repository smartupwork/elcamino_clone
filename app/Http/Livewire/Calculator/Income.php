<?php

namespace App\Http\Livewire\Calculator;

use App\Models\Calculation;
use Livewire\Component;

class Income extends Component
{
    public ?Calculation $calculation;

    public function mount($calculation)
    {
        $this->calculation = $calculation;
    }

    public function render()
    {
        $data = array();
        $data['income'] = $this->calculation?->income;
        return view('livewire.calculator.income', $data);
    }
}
