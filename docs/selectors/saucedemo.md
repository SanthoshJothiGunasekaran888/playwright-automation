
## Application Info
- **URL**: https://www.saucedemo.com/
- **Test Accounts**:
  - Standard user: `standard_user` / `secret_sauce`
  - Locked out user: `locked_out_user` / `secret_sauce`
  - Problem user: `problem_user` / `secret_sauce`
  - Performance glitch user: `performance_glitch_user` / `secret_sauce`
  - Error user: `error_user` / `secret_sauce`
  - Visual user: `visual_user` / `secret_sauce`

---

## 1. Login Page

### Input Fields
| Element | Selector | Type | Purpose |
|---------|----------|------|---------|
| Username field | `#user-name` | CSS ID | Enter username |
| Password field | `#password` | CSS ID | Enter password |
| Login button | `#login-button` | CSS ID | Submit login form |

### Error Messages
| Element | Selector | Type | Purpose |
|---------|----------|------|---------|
| Error message container | `[data-test="error"]` | CSS Attribute | Shows login errors |
| Error close button | `.error-button` | CSS Class | Dismiss error message |

### Copy-paste ready for page object:
```javascript
// LoginPage Selectors
this.usernameInput = '#user-name';
this.passwordInput = '#password';
this.loginButton = '#login-button';
this.errorMessage = '[data-test="error"]';