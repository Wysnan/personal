using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Linq.Expressions;
using Common.POCO;
using Interface;
using EF;
using Common.Enum;

namespace Business
{
    /// <summary>
    /// 业务基类
    /// 方法的定义（名称，参数，返回值）都是预先定义的。最终，框架会根据这些预定义内容调用方法。
    /// 注意以下问题：
    ///     1.对于复杂业务的调用，一定要重写（override）基类方法并做业务扩展。
    ///     2.如果1不能满足业务需求（参数或返回值），才可以定义自己的方法。
    /// </summary>
    /// <typeparam name="T">实体类型</typeparam>
    public class GenericBusinessModel<T> : IBusinessLogicModel<T> where T : class,IBaseEntity
    {
        #region 属性
        public EntityFrameworkModel Model = new EntityFrameworkModel();
        #endregion

        public GenericBusinessModel()
            : base()
        {

        }

        #region 业务方法

        public virtual void Add(T t)
        {
            Model.Add<T>(t);
        }
        public void Update(T t)
        {
            Model.Update(t);
        }

        #region Delete

        public void Delete(T t)
        {
            Model.Delete(t);
        }

        public void Delete(int id)
        {
            Model.Delete<T>(id);
        }

        public void LogicDelete(T t)
        {
            Model.LogicDelete(t);
        }

        public void LogicDelete(int id)
        {
            Model.LogicDelete<T>(id);
        }

        public void Undelete(int id)
        {
            Model.Undelete<T>(id);
        }

        #endregion

        #region Get

        public virtual IQueryable<T> List()
        {
            return Model.List<T>().Where(a => a.SystemStatus.HasValue && a.SystemStatus == (int)SystemStatus.Active);
        }
        public virtual IQueryable<T> List<U>(Expression<Func<T, U>> includeProperty)
        {
            IQueryable<T> query = null;
            query = Model.List<T, U>(includeProperty);
            return query;
        }

        //public IQueryable<T> List(PageInfo page)
        //{
        //    throw new NotImplementedException();
        //}

        public virtual List<T> All()
        {
            return Model.List<T>().Where(a => a.SystemStatus.HasValue && a.SystemStatus == (int)SystemStatus.Active).ToList();
        }

        public T Get(int id)
        {
            return Model.Get<T>(id);
        }

        public T Get(string key, string value)
        {
            throw new NotImplementedException();
        }

        #endregion

        #endregion
    }
}
