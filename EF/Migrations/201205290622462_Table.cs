namespace EF.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class Table : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Admin",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        SystemStatus = c.Byte(),
                        Login = c.String(),
                        Pwd = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
            CreateTable(
                "User",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        SystemStatus = c.Byte(),
                        LoginName = c.String(nullable: false, maxLength: 12),
                        LoginPwd = c.String(nullable: false, maxLength: 12),
                        Name = c.String(nullable: false, maxLength: 12),
                        Email = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("User");
            DropTable("Admin");
        }
    }
}
