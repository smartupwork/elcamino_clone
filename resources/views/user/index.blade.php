<x-base-layout>
    <div class="card mb-10">
        <div class="card-header">
            <h3 class="card-title">{{ __('Users') }}</h3>
            <div class="card-toolbar">
                <a href="{{ route('users.create') }}" class="btn btn-sm btn-light">
                    {{ __('Add New') }}
                </a>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                    <tr class="fw-bolder fs-6 text-gray-800">
                        <th>{{ __('Name') }}</th>
                        <th>{{ __('email') }}</th>
                        <th>{{ __('Age') }}</th>
                        <th>{{ __('Joined') }}</th>
                        <th class="text-end">{{ __('Actions') }}</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($users as $user)
                        <tr>
                            <td>{{ $user->name }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->age }} Yr</td>
                            <td>{{ $user->created_at->diffForHumans() }}</td>
                            <td>
                                <div class="d-flex justify-content-end flex-shrink-0">
                                    <a href="{{ route('users.edit', $user) }}"
                                       class="btn btn-icon btn-active-color-primary btn-sm me-1">
                                        {!! theme()->getSvgIcon('icons/duotune/art/art005.svg', 'svg-icon svg-icon-3') !!}
                                    </a>
                                    @if(!$user->isAdmin())
                                    <button data-bs-target="#confirm_user_{{ $user->id }}"
                                            data-bs-toggle="modal"
                                            class="btn btn-icon btn-active-color-danger btn-sm">
                                        {!! theme()->getSvgIcon('icons/duotune/general/gen027.svg', 'svg-icon svg-icon-3') !!}
                                    </button>
                                    @endif
                                </div>
                            </td>
                        </tr>
                        <x-modals.confirm
                            :route="route('users.destroy', $user)"
                            :model="$user" :button="false"
                        />
                    @endforeach
                    </tbody>
                </table>
                {{ $users->links() }}
            </div>
        </div>
    </div>

</x-base-layout>

