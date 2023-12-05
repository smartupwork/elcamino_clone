<div class="mb-20 text-center" {{ $attributes->merge() }}>
    <div class="btn-group w-80 w-lg-50" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button]">
        <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-primary active"
               data-kt-button="true">
            <input class="btn-check" type="radio" name="input_type" value="slider" checked="checked"/>
            {{ __('Slider') }}
        </label>
        <label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-primary"
               data-kt-button="true">
            <input class="btn-check" id="inputtextvalue" type="radio" name="input_type" value="text"/>
            {{ __('Text') }}
        </label>
    </div>

    <div class="btn-group w-20 w-lg-20">
        <label class="text-white text-hover-white text-active-white btn-success btn-active-success"
               data-kt-button="true" id="save_btn">
            <svg width="40.016px" height="40.016px" viewBox="-0.01 -0.008 100.016 100.016" xmlns="http://www.w3.org/2000/svg">
                <title>Save Data</title>
                <path fill="#23475F" d="M88.555-.008H83v.016a2 2 0 0 1-2 2H19a2 2 0 0 1-2-2v-.016H4a4 4 0 0 0-4 4v92.016a4 4 0 0 0 4 4h92a4 4 0 0 0 4-4V11.517c.049-.089-11.436-11.454-11.445-11.525z"/><path fill="#1C3C50" d="M81.04 53.008H18.96a2 2 0 0 0-2 2v45h66.08v-45c0-1.106-.895-2-2-2zm-61.957-10h61.834a2 2 0 0 0 2-2V.547A1.993 1.993 0 0 1 81 2.007H19c-.916 0-1.681-.62-1.917-1.46v40.46a2 2 0 0 0 2 2.001z"/><path fill="#EBF0F1" d="M22 55.977h56a2 2 0 0 1 2 2v37.031a2 2 0 0 1-2 2H22c-1.104 0-2-.396-2-1.5V57.977a2 2 0 0 1 2-2z"/><path fill="#BCC4C8" d="M25 77.008h50v1H25v-1zm0 10h50v1H25v-1z"/><path fill="#1C3C50" d="M7 84.008h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm83 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/><path fill="#BCC4C8" d="M37 1.981v36.026a2 2 0 0 0 2 2h39a2 2 0 0 0 2-2V1.981c0 .007-42.982.007-43 0zm37 29.027a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2V10.981a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v20.027z"/><path fill="#FF9D00" d="M78 55.977H22a2 2 0 0 0-2 2v10.031h60V57.977a2 2 0 0 0-2-2z"/></svg>
        </label>
    </div>



</div>
