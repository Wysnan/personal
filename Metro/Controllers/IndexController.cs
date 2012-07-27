using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Common.POCO;
using Business;
using Common.Const;

namespace Metro.Controllers
{
    public class IndexController : Controller
    {
        //
        // GET: /Index/
        public ActionResult Index()
        {
            BlogModel blogModel = new BlogModel();
            var blogs= blogModel.List().Take(4).OrderByDescending(a => a.CreateTime).ToList();
            ViewBag.Blogs = blogs;
            return View();
        }

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login(User user)
        {
            UserModel userModel = new UserModel();
            User u = userModel.Login(user);
            if (u != null)
            {
                Session[SystemConst.LoginUser] = u;
                return RedirectToAction("index", "Index");
            }
            else
            {
                return RedirectToAction("Login", "Index");
            }
        }

        [HttpGet]
        public ActionResult Regist()
        {
            return View("Login");
        }

        [HttpPost]
        public ActionResult Regist(User user)
        {
            UserModel userModel = new UserModel();
            User u = userModel.Regist(user);
            if (u != null)
            {
                Session[SystemConst.LoginUser] = u;
            }
            return RedirectToAction("index", "User");
        }

        public ActionResult Exit()
        {
            Session[SystemConst.LoginUser] = null;
            Session.Clear();
            Session.Abandon();
            return RedirectToAction("index");
        }
    }
}
