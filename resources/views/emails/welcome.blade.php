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
            Thank you for registering with E-Finance. You account has been created and you have been added to the E-Finance e-mail bulletin where we share updates and tips.
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262; padding-bottom: 10px;">
            If you have family or friends interested in improving their financial well-being and knowledge, please share E-Finance with them.
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262; padding-bottom: 10px;">
            We appreciate the opportunity to serve you.
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262;">
              Sincerely,
            </td>
          </tr>
          <tr>
            <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #626262;">
              <b>E-Finance Team</b>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
@endsection