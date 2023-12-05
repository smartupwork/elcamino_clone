<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="x-apple-disable-message-reformatting" />
  <title>Welcome Email</title>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet">
  <style type="text/css">
    @media only screen and (max-width: 616px){
      table.outer {
        width: 100% !important;
      }
      img.bnr-img {
        width: 100% !important;
      }
      table.inner {
        padding: 0 30px;
      }
    }
    @media only screen and (max-width: 516px){
      table.inner {
        width: 100% !important;
        padding: 0 15px;
      }
    }
  </style>
</head>
<body style="margin: 0; padding: 0;">
<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      <table class="outer" align="center" width="600" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding: 27px 0 22px; background: #0377b8;">
            
              <img width="200px" src="https://elcaminofinancial.com/theme/media/logos/dash-logo.png" alt="logo" title="logo">
           
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>

      @yield('content')

    </td>
  </tr>
  <tr>
    <td>
      <table class="outer" align="center" width="600" border="0" cellpadding="0" cellspacing="0" bgcolor="#ececf2">
        <tr>
          <td style="padding: 30px 0;">
            <table class="inner" align="center" width="550" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:14px; font-style: italic; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #a8a8a8; text-align: center;">
                Please click here for E-Finance's Terms and Conditions [http://finance.test/terms\]
                </td>
              </tr>
              <tr>
                <td style="font-size:14px; font-style: italic; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #a8a8a8; text-align: center;">
                Please click here for E-Finance's Privacy Policy [http://finance.test/privacy\]
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td>
      <table class="outer" align="center" width="600" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 13px 0; background: #99c93d;">
            <table class="inner" align="center" width="500" border="0" cellpadding="0" cellspacing="0">
              <tr>
                <td style="font-size:14px; line-height:1.6; font-weight: 400; font-family: 'Open Sans', Roboto, Arial; color: #ffffff; text-align: center;">
                Copyright @2022 E-Finance
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>