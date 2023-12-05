<?php

namespace App\Http\Livewire\Calculator;

use App\Models\Calculation;
use Livewire\Component;

class retirement extends Component
{
    public ?Calculation $calculation;

    public function mount($calculation)
    {
        $this->calculation = $calculation;
    }

    public function render()
    {
        $data = array();
        $data['retirement'] = $this->calculation?->retirement;
        return view('livewire.calculator.retirement', $data);
    }
}
