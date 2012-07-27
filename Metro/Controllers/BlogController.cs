using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Common.POCO;
using Business;
using Metro.Models;

namespace Metro.Controllers
{
    public class BlogController : BaseController
    {
        public ActionResult Index()
        {
            BlogModel model = new BlogModel();
            var list = model.List().ToList();
            return View(list);
        }

        public ActionResult Add()
        {
            return View();
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Add(Blog blog)
        {
            BlogModel model = new BlogModel();

            blog.UserID = LoginUser.ID;
            blog.CreateTime = DateTime.Now;

            model.Add(blog);
            return RedirectToAction("Index");
        }

        public ActionResult Detail(int id)
        {
            BlogModel model = new BlogModel();
            var entity = model.Get(id);
            if (entity == null)
            {
                return View("_Error", new Error("Index", "Blog", "未找到任何信息。"));
            }
            return View(entity);
        }

        public ActionResult Edit(int id)
        {
            BlogModel model = new BlogModel();
            var entity = model.Get(id);
            if (entity == null)
            {
                return View("_Error", new Error("Index", "Blog", "未找到任何信息。"));
            }
            return View(entity);
        }

        [HttpPost]
        [ValidateInput(false)]
        public ActionResult Edit(Blog blog)
        {
            BlogModel model = new BlogModel();
            model.Update(blog);
            return View("Detail", blog);
        }

        public ActionResult Delete(int id)
        {
            BlogModel model = new BlogModel();
            model.Delete(id);
            return RedirectToAction("Index");
        }
    }
}
