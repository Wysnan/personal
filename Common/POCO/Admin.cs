using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Common.POCO
{
    public class Admin : IBaseEntity
    {
        public int ID { get; set; }

        public byte? SystemStatus { get; set; }

        public string Login { get; set; }

        public string Pwd { get; set; }

    }
}
