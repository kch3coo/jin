const header = `
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="index.html">
      <img class="navbar-logo navbar-logo-light" src="assets/images/logos/ez4_light.png" alt="Logo">
      <img class="navbar-logo navbar-logo-dark" src="assets/images/logos/ez4_dark.png" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="burger"><span></span></span></button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav align-items-center mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html" role="button">
            首页
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://moodle.ez4edu.com" role="button">
            学员系统
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="vip.html" role="button">
            VIP俱乐部
          </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            课程列表
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://easy4-0-educational-services.myshopify.com/collections/all" target="_blank">
              <span>多伦多大学 UTSG</span>
              <p>University of Toronto St.George</p>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://utsc-easy4-0-inc.myshopify.com/" target="_blank">
              <span>多伦多大学 UTSC</span>
              <p>University of Toronto Scarborough</p>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://ez4-utm.myshopify.com/" target="_blank">
              <span>多伦多大学 UTM</span>
              <p>University of Toronto Mississauga</p>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://ez4uw.shop/" target="_blank">
              <span>滑铁卢大学</span>
              <p>University of Waterloo</p>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://uofa-easy4-0.myshopify.com/" target="_blank">
              <span>阿尔伯塔大学</span>
              <p>University of Alberta</p>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://ezvancouver.myshopify.com/" target="_blank">
              <span>英属哥伦比亚大学</span>
              <p>University of British Columbia</p>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://ez4western.ca" target="_blank">
              <span>西安大略大学</span>
              <p>Western University</p>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="https://ezqu.ca" target="_blank">
              <span>皇后大学</span>
              <p>Queen's University</p>
            </a>
          </div>
        </li>
        <!-- Wecare
                <li class="nav-item">
            <a class="nav-link" href="wecare.html" role="button">
              We Care
            </a>
             -->

        <li class="nav-item">
          <a class="nav-link" href="team.html" role="button">
            我们的团队
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="career.html" role="button">
            加入我们
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contacts.html" role="button">
            联系我们
          </a>
        </li>

      </ul>

      <ul class="navbar-nav align-items-center mr-0">
        <li class="nav-item">
          <a class="nav-link" href="http://www.easygroup.ca" role="button">
            Powered by Easy Group
          </a>
        </li>
      </ul>
    </div>
  </nav>
</div>
`

const footer = `
<div class="separator-top">
  <div class="container py-5">
    <div class="row justify-content-between align-items-center">
      <div class="col-md-5 text-center text-md-left">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="contacts.html">联系我们</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="career.html">加入我们</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Legal Information</a>
          </li>
        </ul>
      </div>
      <div class="col-md-2 text-center">
        <img class="logo-sm" src="assets/images/logos/ez4_light.png" alt="Logo">
      </div>
      <div class="col-md-5 text-center text-md-right">
        <ul class="socials">
          <li><a href="https://www.linkedin.com/company/easy-4-0-education-inc/" target="_blank" class="icon-linkedin fs-20"></a></li>
          <li><a href="https://www.instagram.com/ez4edu/" class="icon-instagram fs-20" target="_blank"></a></li>
          <li><a href="contacts.html" class="icon-wechat fs-20"></a></li>

        </ul>
      </div>
    </div>
  </div>
</div>
`
$("header").html(header)
$("footer").html(footer)
