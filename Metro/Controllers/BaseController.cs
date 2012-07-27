using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Common.POCO;
using Common.Const;
using System.Web.Routing;

namespace Metro.Controllers
{
    public class BaseController : Controller
    {
        public User LoginUser
        {
            get { return Session[SystemConst.LoginUser] == null ? null : Session[SystemConst.LoginUser] as User; }
            set { Session[SystemConst.LoginUser] = value; }
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (LoginUser == null)
            {
                filterContext.Result = new RedirectToRouteResult("Default",
                    new RouteValueDictionary{
                        { "controller", "Index" },
                        { "action", "Login" }
                });
                return;
            }
            base.OnActionExecuting(filterContext);
        }

    }
}
