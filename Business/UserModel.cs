using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Common.POCO;

namespace Business
{
    public class UserModel : GenericBusinessModel<User>
    {
        public User Regist(User user)
        {
            base.Add(user);
            return user;
        }

        public User Login(User user)
        {
            if (user == null)
            {
                throw new NullReferenceException("user对象为空");
            }
            return base.List().Where(a => a.LoginName == user.LoginName && a.LoginPwd == user.LoginPwd).FirstOrDefault();
        }
    }


}
