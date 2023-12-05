@extends('emails.layout')
@section('content')
  <table class="outer" align="center" width="600" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:30px 0;">
        <table class="inner" align="center" width="500" border="0" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-size:14px; line-height:1.4; font-weight: 700; font-family: 'Open Sans', Roboto, Arial; color: #626262; padding-bottom: 15px;">
              Dear {{$data['name']}},
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262; padding-bottom: 20px;">
              New user {{$data['name']}}, have been registered! Following are his account details:
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262; padding-bottom: 10px;">
              Email: <b>{{$data['email']}}</b>
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262; padding-bottom: 30px;">
              Username: <b>{{$data['name']}}</b>
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262;">
              Sincerely,
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262;">
              <b>Elcaminofinance Team</b>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
@endsection