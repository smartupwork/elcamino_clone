<?php

namespace App\Http\Livewire\Calculator;

use App\Models\Calculation;
use Livewire\Component;

class Goals extends Component
{
    public ?Calculation $calculation;
    public $goals = [];

    public function mount($calculation)
    {
        $this->calculation = $calculation;
        $this->goals = $this->calculation?->goals;

        if (!$this->goals){
            $this->add();
        }
    }

    public function render()
    {
        $data = array();
        return view('livewire.calculator.goals', $data);
    }

    public function remove($i)
    {
        unset($this->goals[$i]);
    }

    public function add()
    {
        $this->goals[] = '';

        $this->emit('refreshSlider');
    }
}
