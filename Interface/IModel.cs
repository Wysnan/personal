using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Linq.Expressions;
using Common.POCO;

namespace Interface
{
    public interface IModel
    {
        #region Add

        void Add<T>(T t) where T : class,IBaseEntity;

        #endregion

        #region Update

        void Update<T>(T t) where T : class,IBaseEntity;

        #endregion

        #region Delete

        void Delete<T>(T t) where T : class,IBaseEntity;

        void Delete<T>(int id) where T : class,IBaseEntity;

        void LogicDelete<T>(T t) where T : class,IBaseEntity;

        void LogicDelete<T>(int id) where T : class,IBaseEntity;

        void Undelete<T>(int id) where T : class,IBaseEntity;
        #endregion

        #region Get

        IQueryable<T> List<T>() where T : class,IBaseEntity;

        IQueryable<T> List<T, U>(Expression<Func<T, U>> expression) where T : class,IBaseEntity;

        T Get<T>(int id) where T : class,IBaseEntity;

        #endregion
    }    
}
