using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Common.POCO
{
    public class QuestionnaireSurvey : IBaseEntity
    {
        public int ID { get; set; }

        public byte? SystemStatus { get; set; }
    }
}
