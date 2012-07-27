$(document).ready(function () {
    $(".delete").click(function () {
        if (confirm("你确定要删除吗？")) {
            return true;
        }
        return false;
    });
});