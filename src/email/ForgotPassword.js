const forgotPasswordClient = (code) => {
  const { numero1, numero2, numero3, numero4, numero5 } = code;

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="format-detection" content="telephone=no">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>ds</title>
      <style type="text/css" emogrify="no">
          #outlook a {
              padding: 0;
          }
  
          .ExternalClass {
              width: 100%;
          }
  
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
              line-height: 100%;
          }
  
          table td {
              border-collapse: collapse;
              mso-line-height-rule: exactly;
          }
  
          .editable.image {
              font-size: 0 !important;
              line-height: 0 !important;
          }
  
          .nl2go_preheader {
              display: none !important;
              mso-hide: all !important;
              mso-line-height-rule: exactly;
              visibility: hidden !important;
              line-height: 0px !important;
              font-size: 0px !important;
          }
  
          body {
              width: 100% !important;
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
              margin: 0;
              padding: 0;
          }
  
          img {
              outline: none;
              text-decoration: none;
              -ms-interpolation-mode: bicubic;
          }
  
          a img {
              border: none;
          }
  
          table {
              border-collapse: collapse;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
          }
  
          th {
              font-weight: normal;
              text-align: left;
          }
  
          *[class="gmail-fix"] {
              display: none !important;
          }
      </style>
      <style type="text/css" emogrify="no">
          @media (max-width: 600px) {
              .gmx-killpill {
                  content: ' /03D1';
              }
          }
      </style>
      <style type="text/css" emogrify="no">
          @media (max-width: 600px) {
              .gmx-killpill {
                  content: ' /03D1';
              }
  
              .r0-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 320px !important
              }
  
              .r1-i {
                  background-color: #ffffff !important
              }
  
              .r2-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  valign: top !important;
                  width: 100% !important
              }
  
              .r3-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 100% !important
              }
  
              .r4-i {
                  padding-bottom: 0px !important;
                  padding-left: 15px !important;
                  padding-right: 15px !important;
                  padding-top: 0px !important
              }
  
              .r5-c {
                  box-sizing: border-box !important;
                  display: block !important;
                  valign: top !important;
                  width: 100% !important
              }
  
              .r6-o {
                  border-style: solid !important;
                  width: 100% !important
              }
  
              .r7-i {
                  padding-bottom: 9px !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
                  padding-top: 8px !important
              }
  
              .r8-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  valign: top !important;
                  width: 111px !important
              }
  
              .r9-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 111px !important
              }
  
              .r10-i {
                  padding-bottom: 0px !important;
                  padding-left: 10px !important;
                  padding-right: 10px !important;
                  padding-top: 0px !important
              }
  
              .r11-i {
                  padding-left: 0px !important;
                  padding-right: 0px !important
              }
  
              .r12-c {
                  box-sizing: border-box !important;
                  text-align: left !important;
                  valign: top !important;
                  width: 100% !important
              }
  
              .r13-o {
                  border-style: solid !important;
                  margin: 0 auto 0 0 !important;
                  margin-bottom: 0px !important;
                  margin-top: 0px !important;
                  width: 100% !important
              }
  
              .r14-i {
                  padding-bottom: 0px !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
                  padding-top: 0px !important;
                  text-align: center !important
              }
  
              .r15-i {
                  padding-bottom: 20px !important;
                  padding-left: 15px !important;
                  padding-right: 15px !important;
                  padding-top: 20px !important
              }
  
              .r16-o {
                  border-style: solid !important;
                  margin: 0 auto 0 0 !important;
                  width: 100% !important
              }
  
              .r17-i {
                  padding-bottom: 15px !important;
                  padding-top: 15px !important;
                  text-align: left !important
              }
  
              .r18-o {
                  background-size: cover !important;
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 100% !important
              }
  
              .r19-c {
                  box-sizing: border-box !important;
                  valign: top !important;
                  width: 20% !important
              }
  
              .r20-i {
                  padding-bottom: 0px !important;
                  padding-left: 30px !important;
                  padding-right: 30px !important;
                  padding-top: 0px !important
              }
  
              .r21-o {
                  border-bottom-color: #ff0000 !important;
                  border-bottom-width: 3px !important;
                  border-left-color: #ff0000 !important;
                  border-left-width: 3px !important;
                  border-right-color: #ff0000 !important;
                  border-right-width: 3px !important;
                  border-style: solid !important;
                  border-top-color: #ff0000 !important;
                  border-top-width: 3px !important;
                  margin: 0 auto 0 0 !important;
                  margin-bottom: 0px !important;
                  margin-top: 0px !important;
                  width: 100% !important
              }
  
              .r22-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  margin-bottom: 15px !important;
                  margin-top: 15px !important;
                  width: 100% !important
              }
  
              .r23-i {
                  text-align: center !important
              }
  
              .r24-r {
                  background-color: #ff0000 !important;
                  border-color: #000000 !important;
                  border-radius: 24px !important;
                  border-width: 0px !important;
                  box-sizing: border-box;
                  height: initial !important;
                  padding-bottom: 12px !important;
                  padding-left: 5px !important;
                  padding-right: 5px !important;
                  padding-top: 12px !important;
                  text-align: center !important;
                  width: 100% !important
              }
  
              .r25-i {
                  background-color: #000000 !important;
                  padding-bottom: 20px !important;
                  padding-left: 15px !important;
                  padding-right: 15px !important;
                  padding-top: 20px !important
              }
  
              .r26-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  width: 100% !important
              }
  
              .r27-c {
                  box-sizing: border-box !important;
                  width: 100% !important
              }
  
              .r28-i {
                  font-size: 0px !important;
                  padding-bottom: 15px !important;
                  padding-left: 65px !important;
                  padding-right: 65px !important;
                  padding-top: 15px !important
              }
  
              .r29-c {
                  box-sizing: border-box !important;
                  width: 32px !important
              }
  
              .r30-o {
                  border-style: solid !important;
                  margin-right: 8px !important;
                  width: 32px !important
              }
  
              .r31-i {
                  padding-bottom: 5px !important;
                  padding-top: 5px !important
              }
  
              .r32-o {
                  border-style: solid !important;
                  margin-right: 0px !important;
                  width: 32px !important
              }
  
              .r33-i {
                  padding-bottom: 15px !important;
                  padding-left: 0px !important;
                  padding-right: 0px !important;
                  padding-top: 0px !important
              }
  
              .r34-c {
                  box-sizing: border-box !important;
                  text-align: center !important;
                  valign: top !important;
                  width: 129px !important
              }
  
              .r35-o {
                  border-style: solid !important;
                  margin: 0 auto 0 auto !important;
                  width: 129px !important
              }
  
              body {
                  -webkit-text-size-adjust: none
              }
  
              .nl2go-responsive-hide {
                  display: none
              }
  
              .nl2go-body-table {
                  min-width: unset !important
              }
  
              .mobshow {
                  height: auto !important;
                  overflow: visible !important;
                  max-height: unset !important;
                  visibility: visible !important;
                  border: none !important
              }
  
              .resp-table {
                  display: inline-table !important
              }
  
              .magic-resp {
                  display: table-cell !important
              }
          }
      </style>
      <style type="text/css">
          p,
          h1,
          h2,
          h3,
          h4,
          ol,
          ul {
              margin: 0;
          }
  
          a,
          a:link {
              color: #000000;
              text-decoration: underline
          }
  
          .nl2go-default-textstyle {
              color: #3b3f44;
              font-family: arial, helvetica, sans-serif;
              font-size: 18px;
              line-height: 1.5;
              word-break: break-word
          }
  
          .default-button {
              color: #ffffff;
              font-family: arial, helvetica, sans-serif;
              font-size: 16px;
              font-style: normal;
              font-weight: bold;
              line-height: 1.15;
              text-decoration: none;
              word-break: break-word
          }
  
          .default-heading1 {
              color: #1F2D3D;
              font-family: arial, helvetica, sans-serif;
              font-size: 36px;
              word-break: break-word
          }
  
          .default-heading2 {
              color: #1F2D3D;
              font-family: arial, helvetica, sans-serif;
              font-size: 32px;
              word-break: break-word
          }
  
          .default-heading3 {
              color: #1F2D3D;
              font-family: arial, helvetica, sans-serif;
              font-size: 24px;
              word-break: break-word
          }
  
          .default-heading4 {
              color: #1F2D3D;
              font-family: arial, helvetica, sans-serif;
              font-size: 18px;
              word-break: break-word
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
              font-size: inherit !important;
              font-family: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
          }
  
          .no-show-for-you {
              border: none;
              display: none;
              float: none;
              font-size: 0;
              height: 0;
              line-height: 0;
              max-height: 0;
              mso-hide: all;
              overflow: hidden;
              table-layout: fixed;
              visibility: hidden;
              width: 0;
          }
      </style>
      <!--[if mso]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]-->
      <style type="text/css">
          a:link {
              color: #000;
              text-decoration: underline;
          }
      </style>
  </head>
  
  <body bgcolor="#ffffff" text="#3b3f44" link="#000000" yahoo="fix" style="background-color: #ffffff;">
      <table cellspacing="0" cellpadding="0" border="0" role="presentation" class="nl2go-body-table" width="100%"
          style="background-color: #ffffff; width: 100%;">
          <tr>
              <td>
                  <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="600" align="center"
                      class="r0-o" style="table-layout: fixed; width: 600px;">
                      <tr>
                          <td valign="top" class="r1-i" style="background-color: #ffffff;">
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                  align="center" class="r3-o" style="table-layout: fixed; width: 100%;">
                                  <tr>
                                      <td class="r4-i">
                                          <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                              role="presentation">
                                              <tr>
                                                  <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r7-i"
                                                                  style="padding-bottom: 9px; padding-left: 10px; padding-right: 10px; padding-top: 8px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r8-c" align="center">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="111" class="r9-o"
                                                                                  style="table-layout: fixed; width: 111px;">
                                                                                  <tr>
                                                                                      <td
                                                                                          style="font-size: 0px; line-height: 0px;">
                                                                                          <img src="https://img.mailinblue.com/5881121/images/content_library/original/6531609ee6e5de6ccb3e4558.png"
                                                                                              width="111" border="0"
                                                                                              style="display: block; width: 100%;">
                                                                                      </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                  align="center" class="r3-o" style="table-layout: fixed; width: 100%;">
                                  <tr>
                                      <td class="r10-i">
                                          <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                              role="presentation">
                                              <tr>
                                                  <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r11-i">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r12-c" align="left">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="100%" class="r13-o"
                                                                                  style="table-layout: fixed; width: 100%;">
                                                                                  <tr>
                                                                                      <td align="center" valign="top"
                                                                                          class="r14-i nl2go-default-textstyle"
                                                                                          style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; word-break: break-word; line-height: 1.5; text-align: center;">
                                                                                          <div>
                                                                                              <h1 class="default-heading1"
                                                                                                  style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">
                                                                                                  Recupera tu contraseña
                                                                                              </h1>
                                                                                          </div>
                                                                                      </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                  align="center" class="r3-o" style="table-layout: fixed; width: 100%;">
                                  <tr>
                                      <td class="r15-i" style="padding-bottom: 20px; padding-top: 20px;">
                                          <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                              role="presentation">
                                              <tr>
                                                  <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r11-i"
                                                                  style="padding-left: 15px; padding-right: 15px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r12-c" align="left">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="100%" class="r16-o"
                                                                                  style="table-layout: fixed; width: 100%;">
                                                                                  <tr>
                                                                                      <td align="left" valign="top"
                                                                                          class="r17-i nl2go-default-textstyle"
                                                                                          style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; word-break: break-word; padding-bottom: 15px; padding-top: 15px; text-align: left;">
                                                                                          <div>
                                                                                              <p style="margin: 0;">Para
                                                                                                  confirmar que eres tú,
                                                                                                  ingresa el
                                                                                                  siguiente codigo:</p>
                                                                                          </div>
                                                                                      </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                  align="center" class="r18-o" style="table-layout: fixed; width: 100%;">
                                  <tr>
                                      <td class="r15-i" style="padding-bottom: 20px; padding-top: 20px;">
                                          <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                              role="presentation">
                                              <tr>
                                                  <th width="20%" valign="top" class="r19-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r20-i"
                                                                  style="padding-left: 15px; padding-right: 15px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r12-c" align="left">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="60%" class="r21-o"
                                                                                  style="table-layout: fixed; width: 60%;">
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td align="center" valign="top"
                                                                                          class="r14-i nl2go-default-textstyle"
                                                                                          style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; word-break: break-word; text-align: center;">
                                                                                          <div>
                                                                                              <h1 class="default-heading1"
                                                                                                  style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">
                                                                                                  <span
                                                                                                      style="color: #ED1010; font-size: 26px;">${numero1}</span>
                                                                                              </h1>
                                                                                          </div>
                                                                                      </td>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                                  <th width="20%" valign="top" class="r19-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r4-i"
                                                                  style="padding-left: 15px; padding-right: 15px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r12-c" align="left">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="60%" class="r21-o"
                                                                                  style="table-layout: fixed; width: 60%;">
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td align="center" valign="top"
                                                                                          class="r14-i nl2go-default-textstyle"
                                                                                          style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; word-break: break-word; text-align: center;">
                                                                                          <div>
                                                                                              <h1 class="default-heading1"
                                                                                                  style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">
                                                                                                  <span
                                                                                                      style="color: #ED1010; font-size: 26px;">${numero2}</span>
                                                                                              </h1>
                                                                                          </div>
                                                                                      </td>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                                  <th width="20%" valign="top" class="r19-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r4-i"
                                                                  style="padding-left: 15px; padding-right: 15px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r12-c" align="left">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="60%" class="r21-o"
                                                                                  style="table-layout: fixed; width: 60%;">
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td align="center" valign="top"
                                                                                          class="r14-i nl2go-default-textstyle"
                                                                                          style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; word-break: break-word; text-align: center;">
                                                                                          <div>
                                                                                              <h1 class="default-heading1"
                                                                                                  style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">
                                                                                                  <span
                                                                                                      style="color: #ED1010; font-size: 26px;">${numero3}</span>
                                                                                              </h1>
                                                                                          </div>
                                                                                      </td>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                                  <th width="20%" valign="top" class="r19-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r4-i"
                                                                  style="padding-left: 15px; padding-right: 15px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r12-c" align="left">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="60%" class="r21-o"
                                                                                  style="table-layout: fixed; width: 60%;">
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td align="center" valign="top"
                                                                                          class="r14-i nl2go-default-textstyle"
                                                                                          style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; word-break: break-word; text-align: center;">
                                                                                          <div>
                                                                                              <h1 class="default-heading1"
                                                                                                  style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">
                                                                                                  <span
                                                                                                      style="color: #ED1010; font-size: 26px;">${numero4}</span>
                                                                                              </h1>
                                                                                          </div>
                                                                                      </td>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                                  <th width="20%" valign="top" class="r19-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r4-i"
                                                                  style="padding-left: 15px; padding-right: 15px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r12-c" align="left">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="60%" class="r21-o"
                                                                                  style="table-layout: fixed; width: 60%;">
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td align="center" valign="top"
                                                                                          class="r14-i nl2go-default-textstyle"
                                                                                          style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; word-break: break-word; text-align: center;">
                                                                                          <div>
                                                                                              <h1 class="default-heading1"
                                                                                                  style="margin: 0; color: #1f2d3d; font-family: arial,helvetica,sans-serif; font-size: 36px; word-break: break-word;">
                                                                                                  <span
                                                                                                      style="color: #ED1010; font-size: 26px;">${numero5}</span>
                                                                                              </h1>
                                                                                          </div>
                                                                                      </td>
                                                                                      <td class="nl2go-responsive-hide"
                                                                                          width="3"
                                                                                          style="font-size: 0px; line-height: 1px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                      <td height="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­</td>
                                                                                      <td height="3" width="3"
                                                                                          style="font-size: 3px; line-height: 3px; background-color: #ff0000;">
                                                                                          ­ </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                  align="center" class="r3-o" style="table-layout: fixed; width: 100%;">
                                  <tr>
                                      <td class="r15-i" style="padding-bottom: 20px; padding-top: 20px;">
                                          <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                              role="presentation">
                                              <tr>
                                                  <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r11-i"
                                                                  style="padding-left: 15px; padding-right: 15px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r2-c" align="center">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="285" class="r22-o"
                                                                                  style="table-layout: fixed; width: 285px;">
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="15"
                                                                                          style="font-size: 15px; line-height: 15px;">
                                                                                          ­</td>
                                                                                  </tr>
                                                                                  <tr>
                                                                                      <td height="18" align="center"
                                                                                          valign="top"
                                                                                          class="r23-i nl2go-default-textstyle"
                                                                                          style="color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; word-break: break-word;">
                                                                                          <!--[if mso]> <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="#top" style="v-text-anchor:middle; height: 41px; width: 284px;" arcsize="50%" fillcolor="#ff0000" strokecolor="#ff0000" strokeweight="1px" data-btn="1"> <w:anchorlock> </w:anchorlock> <v:textbox inset="0,0,0,0"> <div style="display:none;"> <center class="default-button"><span>Restaurar Contraseña</span></center> </div> </v:textbox> </v:roundrect> <![endif]-->
                                                                                          <!--[if !mso]><!-- --> 
                                                                                          <!--<![endif]--> </td>
                                                                                  </tr>
                                                                                  <tr class="nl2go-responsive-hide">
                                                                                      <td height="15"
                                                                                          style="font-size: 15px; line-height: 15px;">
                                                                                          ­</td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </table>
                                      </td>
                                  </tr>
                              </table>
                              <table cellspacing="0" cellpadding="0" border="0" role="presentation" width="100%"
                                  align="center" class="r3-o" style="table-layout: fixed; width: 100%;">
                                  <tr>
                                      <td class="r25-i"
                                          style="background-color: #000000; padding-bottom: 20px; padding-top: 20px;">
                                          <table width="100%" cellspacing="0" cellpadding="0" border="0"
                                              role="presentation">
                                              <tr>
                                                  <th width="100%" valign="top" class="r5-c" style="font-weight: normal;">
                                                      <table cellspacing="0" cellpadding="0" border="0"
                                                          role="presentation" width="100%" class="r6-o"
                                                          style="table-layout: fixed; width: 100%;">
                                                          <tr>
                                                              <td valign="top" class="r11-i"
                                                                  style="padding-left: 15px; padding-right: 15px;">
                                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                                      border="0" role="presentation">
                                                                      <tr>
                                                                          <td class="r8-c" align="center">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="111" class="r9-o"
                                                                                  style="border-collapse: separate; border-radius: 100px; table-layout: fixed; width: 111px;">
                                                                                  <tr>
                                                                                      <td
                                                                                          style="border-radius: 100px; font-size: 0px; line-height: 0px;">
                                                                                          <img src="https://img.mailinblue.com/5881121/images/content_library/original/6531609ee6e5de6ccb3e4558.png"
                                                                                              width="111" border="0"
                                                                                              style="display: block; width: 100%; border-radius: 100px;">
                                                                                      </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td class="r26-c" align="center">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="570" align="center" class="r3-o"
                                                                                  style="table-layout: fixed; width: 570px;">
                                                                                  <tr>
                                                                                      <td valign="top">
                                                                                          <table width="100%"
                                                                                              cellspacing="0"
                                                                                              cellpadding="0" border="0"
                                                                                              role="presentation">
                                                                                              <tr>
                                                                                                  <td class="r27-c"
                                                                                                      style="display: inline-block;">
                                                                                                      <table
                                                                                                          cellspacing="0"
                                                                                                          cellpadding="0"
                                                                                                          border="0"
                                                                                                          role="presentation"
                                                                                                          width="570"
                                                                                                          class="r6-o"
                                                                                                          style="table-layout: fixed; width: 570px;">
                                                                                                          <tr>
                                                                                                              <td class="r28-i"
                                                                                                                  style="padding-bottom: 15px; padding-left: 209px; padding-right: 209px; padding-top: 15px;">
                                                                                                                  <table
                                                                                                                      width="100%"
                                                                                                                      cellspacing="0"
                                                                                                                      cellpadding="0"
                                                                                                                      border="0"
                                                                                                                      role="presentation">
                                                                                                                      <tr>
                                                                                                                          <th width="40"
                                                                                                                              class="r29-c mobshow resp-table"
                                                                                                                              style="font-weight: normal;">
                                                                                                                              <table
                                                                                                                                  cellspacing="0"
                                                                                                                                  cellpadding="0"
                                                                                                                                  border="0"
                                                                                                                                  role="presentation"
                                                                                                                                  width="100%"
                                                                                                                                  class="r30-o"
                                                                                                                                  style="table-layout: fixed; width: 100%;">
                                                                                                                                  <tr>
                                                                                                                                      <td class="r31-i"
                                                                                                                                          style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
                                                                                                                                          <img src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/facebook_32px.png"
                                                                                                                                              width="32"
                                                                                                                                              border="0"
                                                                                                                                              style="display: block; width: 100%;">
                                                                                                                                      </td>
                                                                                                                                      <td class="nl2go-responsive-hide"
                                                                                                                                          width="8"
                                                                                                                                          style="font-size: 0px; line-height: 1px;">
                                                                                                                                          ­
                                                                                                                                      </td>
                                                                                                                                  </tr>
                                                                                                                              </table>
                                                                                                                          </th>
                                                                                                                          <th width="40"
                                                                                                                              class="r29-c mobshow resp-table"
                                                                                                                              style="font-weight: normal;">
                                                                                                                              <table
                                                                                                                                  cellspacing="0"
                                                                                                                                  cellpadding="0"
                                                                                                                                  border="0"
                                                                                                                                  role="presentation"
                                                                                                                                  width="100%"
                                                                                                                                  class="r30-o"
                                                                                                                                  style="table-layout: fixed; width: 100%;">
                                                                                                                                  <tr>
                                                                                                                                      <td class="r31-i"
                                                                                                                                          style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
                                                                                                                                          <img src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/twitter_32px.png"
                                                                                                                                              width="32"
                                                                                                                                              border="0"
                                                                                                                                              style="display: block; width: 100%;">
                                                                                                                                      </td>
                                                                                                                                      <td class="nl2go-responsive-hide"
                                                                                                                                          width="8"
                                                                                                                                          style="font-size: 0px; line-height: 1px;">
                                                                                                                                          ­
                                                                                                                                      </td>
                                                                                                                                  </tr>
                                                                                                                              </table>
                                                                                                                          </th>
                                                                                                                          <th width="40"
                                                                                                                              class="r29-c mobshow resp-table"
                                                                                                                              style="font-weight: normal;">
                                                                                                                              <table
                                                                                                                                  cellspacing="0"
                                                                                                                                  cellpadding="0"
                                                                                                                                  border="0"
                                                                                                                                  role="presentation"
                                                                                                                                  width="100%"
                                                                                                                                  class="r30-o"
                                                                                                                                  style="table-layout: fixed; width: 100%;">
                                                                                                                                  <tr>
                                                                                                                                      <td class="r31-i"
                                                                                                                                          style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
                                                                                                                                          <img src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/youtube_32px.png"
                                                                                                                                              width="32"
                                                                                                                                              border="0"
                                                                                                                                              style="display: block; width: 100%;">
                                                                                                                                      </td>
                                                                                                                                      <td class="nl2go-responsive-hide"
                                                                                                                                          width="8"
                                                                                                                                          style="font-size: 0px; line-height: 1px;">
                                                                                                                                          ­
                                                                                                                                      </td>
                                                                                                                                  </tr>
                                                                                                                              </table>
                                                                                                                          </th>
                                                                                                                          <th width="32"
                                                                                                                              class="r29-c mobshow resp-table"
                                                                                                                              style="font-weight: normal;">
                                                                                                                              <table
                                                                                                                                  cellspacing="0"
                                                                                                                                  cellpadding="0"
                                                                                                                                  border="0"
                                                                                                                                  role="presentation"
                                                                                                                                  width="100%"
                                                                                                                                  class="r32-o"
                                                                                                                                  style="table-layout: fixed; width: 100%;">
                                                                                                                                  <tr>
                                                                                                                                      <td class="r31-i"
                                                                                                                                          style="font-size: 0px; line-height: 0px; padding-bottom: 5px; padding-top: 5px;">
                                                                                                                                          <img src="https://creative-assets.mailinblue.com/editor/social-icons/rounded_colored/linkedin_32px.png"
                                                                                                                                              width="32"
                                                                                                                                              border="0"
                                                                                                                                              style="display: block; width: 100%;">
                                                                                                                                      </td>
                                                                                                                                  </tr>
                                                                                                                              </table>
                                                                                                                          </th>
                                                                                                                      </tr>
                                                                                                                  </table>
                                                                                                              </td>
                                                                                                          </tr>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <td class="r26-c" align="center">
                                                                              <table cellspacing="0" cellpadding="0"
                                                                                  border="0" role="presentation"
                                                                                  width="100%" align="center" class="r3-o"
                                                                                  style="table-layout: fixed; width: 100%;">
                                                                                  <tr>
                                                                                      <td valign="top" class="r33-i"
                                                                                          style="padding-bottom: 15px;">
                                                                                          <table width="100%"
                                                                                              cellspacing="0"
                                                                                              cellpadding="0" border="0"
                                                                                              role="presentation">
                                                                                              <tr>
                                                                                                  <td class="r34-c"
                                                                                                      align="center">
                                                                                                      <table
                                                                                                          cellspacing="0"
                                                                                                          cellpadding="0"
                                                                                                          border="0"
                                                                                                          role="presentation"
                                                                                                          width="129"
                                                                                                          class="r35-o"
                                                                                                          style="table-layout: fixed;">
                                                                                                          <tr>
                                                                                                              <td height="48"
                                                                                                                  style="font-size: 0px; line-height: 0px;">
                                                                                                               
                                                                                                              </td>
                                                                                                          </tr>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </table>
                                                                                      </td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </th>
                                              </tr>
                                          </table>
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
  
  </html>`;
};

module.exports = { forgotPasswordClient };
