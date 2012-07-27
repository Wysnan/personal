using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Linq.Expressions;
using Common.POCO;

namespace Interface
{
    public interface IBusinessLogicModel<T> where T : IBaseEntity
    {
        void Add(T t);

        void Update(T t);

        void Delete(T t);
        void Delete(int id);
        void LogicDelete(T t);
        void LogicDelete(int id);
        void Undelete(int id);

        IQueryable<T> List();

        List<T> All();

        T Get(int id);

        T Get(string key, string value);
    }
}
