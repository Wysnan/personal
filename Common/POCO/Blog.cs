using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace Common.POCO
{
    public class Blog : IBaseEntity
    {
        public int ID { get; set; }

        public byte? SystemStatus { get; set; }

        [StringLength(20)]
        [Required(ErrorMessage = "必填")]
        [Display(Name = "标题")]
        public string Title { get; set; }

        [Display(Name = "内容")]
        [Required(ErrorMessage = "必填")]
        public string Content { get; set; }

        [Display(Name = "创建时间")]
        public DateTime CreateTime { get; set; }

        [Display(Name="创建者")]
        public int UserID { get; set; }

        public virtual User User { get; set; }
    }
}
