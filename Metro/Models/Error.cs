using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Metro.Models
{
    public class Error
    {
        public Error() { }

        public Error(string action, string controll, string message)
        {
            Action = action;
            Controll = controll;
            this.Message = message;
        }

        public string Action { get; set; }

        public string Controll { get; set; }

        public string Message { get; set; }
    }
}