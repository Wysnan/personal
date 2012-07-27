using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Linq;
using System.Linq.Expressions;
using Common.POCO;
using Common.Enum;
using Interface;

namespace EF
{
    public class EntityFrameworkModel : IModel, IDisposable
    {
        #region Private Fields

        public DbContext DB = new Context();

        #endregion

        #region IModel Members

        #region Get

        public TType Get<TType>(int id) where TType : class, IBaseEntity
        {
            return List<TType>().FirstOrDefault(o => o.ID == id && o.SystemStatus == (int)SystemStatus.Active);
        }

        public IQueryable<TType> List<TType>() where TType : class, IBaseEntity
        {
            return GetDbSet<TType>().Where(a => a.SystemStatus.HasValue && a.SystemStatus == (int)SystemStatus.Active);
        }

        public IQueryable<TType> List<TType, U>(Expression<Func<TType, U>> expression) where TType : class, IBaseEntity
        {
            return GetDbSet<TType>().Include(expression).Where(a => a.SystemStatus.HasValue && a.SystemStatus == (int)SystemStatus.Active);
        }

        #endregion

        #region Add

        public void Add<TType>(TType entity) where TType : class, IBaseEntity
        {
            if (entity.SystemStatus == null)
            {
                entity.SystemStatus = (byte)SystemStatus.Active;
            }

            GetDbSet<TType>().Add(entity);
            SaveChanges();
        }

        #endregion

        #region Update

        public void Update<TType>(TType entity) where TType : class, IBaseEntity
        {
            var oldEntity = GetDbSet<TType>().Find(entity.ID);
            if (oldEntity == null)
            {
                throw new Exception("未找到改对象。");
            }
            if (oldEntity.SystemStatus == (int)SystemStatus.Deleted)
            {
                throw new Exception("该对象已删除。");
            }
            try
            {
                DB.Entry(oldEntity).CurrentValues.SetValues(entity);
                SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                Dispose();
            }
        }

        #endregion

        #region Delete

        public void LogicDelete<TType>(TType entity) where TType : class, IBaseEntity
        {
            LogicDelete<TType>(entity.ID);
        }

        public void LogicDelete<TType>(int id) where TType : class, IBaseEntity
        {
            var oldObject = Get<TType>(id);
            if (oldObject == null)
            {
                throw new Exception("未找到改对象。");
            }
            oldObject.SystemStatus = (byte)SystemStatus.Deleted;
            Update(oldObject);
        }

        public void Delete<TType>(TType entity) where TType : class, IBaseEntity
        {
            try
            {
                GetDbSet<TType>().Remove(entity);
                SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                Dispose();
            }
        }

        public void Delete<TType>(int id) where TType : class, IBaseEntity
        {
            var dbSet = GetDbSet<TType>();
            var entity = dbSet.Find(id);
            try
            {
                dbSet.Remove(entity);
                SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                Dispose();
            }

        }

        public void Undelete<TType>(int id) where TType : class, IBaseEntity
        {
            var oldObject = Get<TType>(id);
            if (oldObject == null)
            {
                throw new Exception("未找到改对象。");
            }
            oldObject.SystemStatus = (byte)SystemStatus.Active;
            Update(oldObject);
        }
        #endregion

        #endregion

        #region IDisposable Members

        public void Dispose()
        {
            DB.Dispose();
        }

        #endregion

        #region Business Methods

        private void SaveChanges()
        {
            try
            {
                int i = DB.SaveChanges();
            }
            catch (DbEntityValidationException e)
            {
                throw e;
            }
        }

        private DbSet<TType> GetDbSet<TType>() where TType : class, IBaseEntity
        {
            return DB.Set<TType>();
        }
        #endregion



    }
}