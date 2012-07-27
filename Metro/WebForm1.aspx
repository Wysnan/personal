<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Metro.WebForm1" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="/Scripts/yoxview/yoxview-init.js"></script>
    <script>
        LoadScript(yoxviewPath + "yoxview-nojquery.js");
        $(document).ready(function () {
            $(".yoxview").yoxview({ playDelay: 5000 });
        });
    </script>
    <link href="/main.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
   <%-- <div class="yoxview">
        <a href="/Content/images/home_mood.png">
            <img src="/Content/images/home_mood.png" alt="First" title="First image" /></a>
        <a href="/Content/images/home_play.png">
            <img src="/Content/images/home_play.png" alt="Second" title="Second image" /></a>
    </div>--%>
    <div class="examplePanel">
        <h2 class="left">
            <img src="/Scripts/yoxview/demoImage/small_examples_icon.png" alt="Example">
            Example</h2>
        <div class="clear">
        </div>
        <div class="thumbnails yoxview">
            <a href="/Scripts/yoxview/demoImage/Forme.jpg">
                <img src="/Scripts/yoxview/demoImage/Forme.jpg" alt="Life +-" title="Life +-"></a>
            <a href="/Scripts/yoxview/demoImage/Dream.jpg">
                <img src="/Scripts/yoxview/demoImage/Dream.jpg" alt="It's Not Your Turn" title="It's Not Your Turn"></a>
            <a href="/Scripts/yoxview/demoImage/Come-for-me.jpg">
                <img src="/Scripts/yoxview/demoImage/Come-for-me.jpg" alt="Oh, How I Hoped That When He Came, He Would Come For Me."
                    title="Oh, How I Hoped That When He Came, He Would Come For Me."></a> <a href="/Scripts/yoxview/demoImage/Sitting-Seven.jpg">
                        <img src="/Scripts/yoxview/demoImage/Sitting-Seven.jpg" alt="Sitting Seven" title="Sitting Seven"></a>
            <a href="/Scripts/yoxview/demoImage/Pshhh.jpg">
                <img src="/Scripts/yoxview/demoImage/Pshhh.jpg" alt="Casa De La Onion" title="Casa De La Onion"></a>
            <a href="/Scripts/yoxview/demoImage/Tut-Tut-It-Looks-Like-Rain.jpg">
                <img src="/Scripts/yoxview/demoImage/Tut-Tut-It-Looks-Like-Rain.jpg" alt="Tut-Tut, It Looks Like Rain"
                    title="Tut-Tut, It Looks Like Rain"></a> <a href="http://vimeo.com/5604684">
                        <img src="/Scripts/yoxview/demoImage/geva.jpg" alt="Come Race Me" title="Geva Alon - Come Race Me"><span>Vimeo</span></a>
            <a href="http://www.youtube.com/watch?v=__MBNuGO2fo">
                <img src="/Scripts/yoxview/demoImage/eatliz.jpg" alt="Gumby" title="Eatliz - Sunshine (live)"><span>YouTube</span></a>
        </div>
        <div class="clear">
        </div>
        <h3>
            Other media + skin:</h3>
        <div id="contentExample" class="thumbnails">
            <a href="/yoxview/media/cats2.f4v?width=640&amp;height=360&amp;image=/yoxview/media/cats.jpg">
                <img src="/Scripts/yoxview/demoImage/cats.jpg" alt="Cats" title="Local video with JW Player"><span>Video</span></a>
            <a href="http://dynamic.xkcd.com/random/comic/?width=880" target="yoxview">
                <img src="/Scripts/yoxview/demoImage/xkcd.jpg" alt="XKCD" title="Random XKCD comic"><span>iframe</span></a>
            <a href="/yoxview/media/seahawks_vr.swf">
                <img src="/Scripts/yoxview/demoImage/seahawks_vr.jpg" alt="VR" title="Seattle Seahawks NFL Playoffs Game, Qwest Field, Seattle WA, &amp;copy; &lt;a href='http://www.bohonus.com' target='_blank'&gt;Bradford Bohonus&lt;/a&gt;"><span>Flash</span></a>
            <a href="#inlineContent">
                <img src="/Scripts/yoxview/demoImage/bridge.jpg" alt="The Bridge of Death" title="The Bridge of Death!"><span>Inline</span></a>
        </div>
        <div>
        </div>
    </div>
    </form>
</body>
</html>
