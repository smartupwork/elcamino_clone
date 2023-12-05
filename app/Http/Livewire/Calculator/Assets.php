<?php

namespace App\Http\Livewire\Calculator;

use App\Models\Calculation;
use Livewire\Component;

class Assets extends Component
{
    public ?Calculation $calculation;
    public $assets = [];

    public function mount($calculation)
    {
        $this->calculation = $calculation;
        $this->assets = $this->calculation?->assets;

        if (!$this->assets){
            $this->add();
        }
    }

    public function render()
    {
        $data = array();
        $data['categories'] = config('constants.asset_categories');
        return view('livewire.calculator.assets', $data);
    }

    public function remove($i)
    {
        unset($this->assets[$i]);
        $this->emit('updateTotal');
    }

    public function add()
    {
        $this->assets[] = [
            'category' => '',
            'description' => '',
            'value' => '',
        ];

        $this->emit('refreshSlider');
    }
}
