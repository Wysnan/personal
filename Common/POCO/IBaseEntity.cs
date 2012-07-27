using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace Common.POCO
{
    public interface IBaseEntity
    {
        int ID { get; set; }

        byte? SystemStatus { get; set; }

        //[ConcurrencyCheck]
        //[Timestamp]
        //byte[] TimeStamp { get; set; }
    }
}
