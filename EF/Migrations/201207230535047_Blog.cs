namespace EF.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class Blog : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Blog",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        SystemStatus = c.Byte(),
                        Title = c.String(nullable: false, maxLength: 20),
                        Content = c.String(nullable: false),
                        CreateTime = c.DateTime(nullable: false),
                        UserID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("User", t => t.UserID, cascadeDelete: true)
                .Index(t => t.UserID);
            
        }
        
        public override void Down()
        {
            DropIndex("Blog", new[] { "UserID" });
            DropForeignKey("Blog", "UserID", "User");
            DropTable("Blog");
        }
    }
}
