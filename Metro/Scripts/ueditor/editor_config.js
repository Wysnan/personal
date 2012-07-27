/**
 *  ueditor完整配置项
 *  可以在这里配置整个编辑器的特性
 */

/**************************提示********************************
 * 所有被注释的配置项的默认值就是注释项后边给的值或者是有提示默认值是多少，如果你想改，就去掉注释，修改默认值，或者在实例化编辑器时传入相应的值，就会覆盖默认的配置值
 * 每次升级编辑器时，可以直接用你改的editor_config.js直接覆盖新版本的editor_config.js,而不用担心会出现错误提示
 **************************提示********************************/


(function () {
    /**
     * 编辑器资源文件根路径。它所表示的含义是：以编辑器实例化页面为当前路径，指向编辑器资源文件（即dialog等文件夹）的路径。
     * 鉴于很多同学在使用编辑器的时候出现的种种路径问题，此处强烈建议大家使用"相对于网站根目录的相对路径"进行配置。
     * "相对于网站根目录的相对路径"也就是以斜杠开头的形如"/myProject/ueditor/"这样的路径。
     * 如果站点中有多个不在同一层级的页面需要实例化编辑器，且引用了同一UEditor的时候，此处的URL可能不适用于每个页面的编辑器。
     * 因此，UEditor提供了针对不同页面的编辑器可单独配置的根路径，具体来说，在需要实例化编辑器的页面最顶部写上如下代码即可。当然，需要令此处的URL等于对应的配置。
     * window.UEDITOR_HOME_URL = "/xxxx/xxxx/";
     */
    var URL;

    /**
     * 此处配置写法适用于UEditor小组成员开发使用，外部部署用户请按照上述说明方式配置即可，建议保留下面两行，以兼容可在具体每个页面配置window.UEDITOR_HOME_URL的功能。
     */
    var tmp = window.location.pathname;
        URL = window.UEDITOR_HOME_URL||tmp.substr(0,tmp.lastIndexOf("\/")+1).replace("_examples/","").replace("website/","");//这里你可以配置成ueditor目录在您网站的相对路径或者绝对路径（指以http开头的绝对路径）

    /**
     * 配置项主体。注意，此处所有涉及到路径的配置别遗漏URL变量。
     */
    window.UEDITOR_CONFIG = {

        //为编辑器实例添加一个路径，这个不能被注释
        UEDITOR_HOME_URL : URL

        //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
        ,toolbars:[
            ['Bold', 'Italic', 'Underline', 'StrikeThrough', 'RemoveFormat', 'FormatMatch', 'AutoTypeSet', 'ForeColor', 'BackColor', 'FontFamily', 'FontSize', 'RowSpacingTop', 'RowSpacingBottom', 'LineHeight', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyJustify', 'Link', 'Unlink', 'Anchor', 'InsertImage', 'Emotion', 'InsertVideo', 'Map', 'HighlightCode', 'Spechars', 'Attachment', 'ImageNone', 'ImageLeft', 'ImageCenter', 'ImageRight', 'InsertTable', 'DeleteTable', 'ClearDoc', 'Undo', 'Redo', 'SearchReplace', 'Preview', 'PastePlain', 'Source', 'Print', 'FullScreen']
        ]
        //当鼠标放在工具栏上时显示的tooltip提示
        ,labelMap:{
            'bold':'加粗','italic':'斜体','underline':'下划线','strikethrough':'删除线','removeformat':'清除格式','formatmatch':'格式刷','autotypeset':'自动排版','forecolor':'文字颜色','backcolor':'背景颜色','fontfamily':'字体','fontsize':'字号','rowspacingtop':'段前间距','rowspacingbottom':'段后间距','lineheight':'行间距','justifyleft':'居左对齐','justifycenter':'居中对齐','justifyright':'居右对齐','justifyjustify':'两端对齐','link':'插入链接','unlink':'取消链接','anchor':'插入锚点','insertimage':'插入图片','emotion':'插入表情','insertvideo':'插入视频','map':'插入百度地图','highlightcode':'插入源代码','spechars':'插入特殊字符','attachment':'插入附件','imagenone':'默认','imageleft':'图片居左','imagecenter':'图片居中','imageright':'图片居右','inserttable':'插入表格','deletetable':'删除表格','cleardoc':'清空文档','undo':'撤销','redo':'重做','searchreplace':'查找替换','preview':'预览','pasteplain':'纯文本粘贴','source':'切换源码','print':'打印','fullscreen':'全屏'
        }

        //常用配置项目
        //,isShow : true    //默认显示编辑器

        //,initialContent:'欢迎使用ueditor!'    //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子

        //,autoClearinitialContent:false //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了

        //,iframeCssUrl: URL + '/themes/default/iframe.css' //给编辑器内部引入一个css文件

        //,textarea:'editorValue' // 提交表单时，服务器获取编辑器提交内容的所用的参数，多实例时可以给容器name属性，会将name给定的值最为每个实例的键值，不用每次实例化的时候都设置这个值

        //,focus:true //初始化时，是否让编辑器获得焦点true或false

        //,minFrameHeight:320  // 最小高度,默认320

        //,autoClearEmptyNode : true //getContent时，是否删除空的inlineElement节点（包括嵌套的情况）

        //,fullscreen : false //编辑器初始化结束后,编辑区域是否是只读的，默认是false

        //,readonly : false //编辑器层级的基数,默认是999

        //,zIndex : 999 //图片操作的浮层开关，默认打开

        //,imagePopup:true

        //,initialStyle:'body{font-size:18px}'   //编辑器内部样式,可以用来改变字体等

        //,emotionLocalization:false //是否开启表情本地化，默认关闭。若要开启请确保emotion文件夹下包含官网提供的images表情文件夹

        //,enterTag:'p' //编辑器回车标签。p或br

        //,pasteplain:false  //是否纯文本粘贴。false为不使用纯文本粘贴，true为使用纯文本粘贴

        //iframeUrlMap
        //dialog内容的路径 ～会被替换成URL,垓属性一旦打开，将覆盖所有的dialog的默认路径
        //,iframeUrlMap:{
        // 'anchor':'~/dialogs/anchor/anchor.html',
        // }

		//tab
        //点击tab键时移动的距离,tabSize倍数，tabNode什么字符做为单位
        //,tabSize:4
        //,tabNode:'&nbsp;'

		//removeFormat
        //清除格式时可以删除的标签和属性
        //removeForamtTags标签
        //,removeFormatTags:'b,big,code,del,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var'
        //removeFormatAttributes属性
        //,removeFormatAttributes:'class,style,lang,width,height,align,hspace,valign'
        
		//autotypeset
        //  //自动排版参数
        //  ,autotypeset:{
        //      mergeEmptyline : true,         //合并空行
        //      removeClass : true,           //去掉冗余的class
        //      removeEmptyline : false,      //去掉空行
        //      textAlign : "left" ,           //段落的排版方式，可以是 left,right,center,justify 去掉这个属性表示不执行排版
        //      imageBlockLine : 'center',      //图片的浮动方式，独占一行剧中,左右浮动，默认: center,left,right,none 去掉这个属性表示不执行排版
        //      pasteFilter : false,            //根据规则过滤没事粘贴进来的内容
        //      clearFontSize : false,          //去掉所有的内嵌字号，使用编辑器默认的字号
        //      clearFontFamily : false,        //去掉所有的内嵌字体，使用编辑器默认的字体
        //      removeEmptyNode : false ,       // 去掉空节点
        //      //可以去掉的标签
        //      removeTagNames : {标签名字:1},
        //      indent : false,                 // 行首缩进
        //      indentValue : '2em'             //行首缩进的大小
        //  }
        
		//insertimage
		//图片上传配置区
        ,imageUrl:URL+"net/imageUp.ashx"             //图片上传提交地址
        ,imagePath:URL + "net/"                    //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
        //,imageFieldName:"upfile"                   //图片描述的key,若此处修改，需要在后台对应文件修改对应参数
        //,compressSide:0                            //等比压缩的基准，确定maxImageSideLength参数的参照对象。0为按照最长边，1为按照宽度，2为按照高度
        //,maxImageSideLength:900                    //上传图片最大允许的边长，超过会自动等比缩放,不缩放就设置一个比较大的值，更多设置在image.html中

        //图片在线管理配置区
        ,imageManagerUrl:URL + "net/imageManager.ashx"       //图片在线管理的处理地址
        ,imageManagerPath:URL + "net/"                                    //图片修正地址，同imagePath
		
		//insertvideo
        //获取视频数据的地址
        ,getMovieUrl:URL+"net/getMovie.ashx"                   //视频数据获取地址
		
		//highlightcode
        // 代码高亮时需要加载的第三方插件的路径
        // ,highlightJsUrl:URL + "third-party/SyntaxHighlighter/shCore.js"
        // ,highlightCssUrl:URL + "third-party/SyntaxHighlighter/shCoreDefault.css"
        
		//attachment
		//附件上传配置区
        ,fileUrl:URL+"net/fileUp.ashx"               //附件上传提交地址
        ,filePath:URL + "net/"                   //附件修正地址，同imagePath
        //,fileFieldName:"upfile"                    //附件提交的表单名，若此处修改，需要在后台对应文件修改对应参数
		
		//undo
         //可以最多回退的次数,默认20
         //,maxUndoCount:20
         //当输入的字符数超过该值时，保存一次现场
         //,maxInputCount:20
        
		//source
        //源码的查看方式,codemirror 是代码高亮，textarea是文本框,默认是codemirror
        //,sourceEditor:"codemirror"
        //如果sourceEditor是codemirror，还用配置一下两个参数
        //codeMirrorJsUrl js加载的路径，默认是 URL + "third-party/codemirror2.15/codemirror.js"
        //,codeMirrorJsUrl:URL + "third-party/codemirror2.15/codemirror.js"
        //codeMirrorCssUrl css加载的路径，默认是 URL + "third-party/codemirror2.15/codemirror.css"
        //,codeMirrorCssUrl:URL + "third-party/codemirror2.15/codemirror.css"
        
		//catchremoteimage
		//远程抓取配置区
        ,catchRemoteImageEnable:true               //是否开启远程图片抓取,默认开启
        ,catcherUrl:URL +"net/getRemoteImage.ashx"   //处理远程图片抓取的地址
        ,catcherPath:URL + "net/"                  //图片修正地址，同imagePath
        //,catchFieldName:"upfile"                   //提交到后台远程图片uri合集，若此处修改，需要在后台对应文件修改对应参数
        //,separater:'ue_separate_ue'               //提交至后台的远程图片地址字符串分隔符
        //,localDomain:[]                            //本地顶级域名，当开启远程图片抓取时，除此之外的所有其它域名下的图片都将被抓取到本地
		
		//contextMenu //定义了右键菜单的内容，可以参考plugins/contextmenu.js里边的默认菜单的例子
        //,contextMenu:[
        //    {
        //        label:'显示的名字',
        //        cmdName:'执行的command命令，当点击这个右键菜单时',
        //        //exec可选，有了exec就会在点击时执行这个function,
        //        exec:function () {
        //            //this是当前编辑器的实例
        //            //this.ui._dialogs['inserttableDialog'].open();
        //        }
        //    }
        //   ]
		
        
		//autoHeight
        // 是否自动长高,默认true
        ,autoHeightEnabled:true
        
		//autoFloat
        //是否保持toolbar的位置不动,默认true
        ,autoFloatEnabled:true
        
		//wordCount
        ,wordCount:true          //是否开启字数统计
        //,maximumWords:10000       //允许的最大字符数
        //,wordCountMsg:'当前已输入 {#count} 个字符，您还可以输入{#leave} 个字符 '   //字数统计提示，{#count}代表当前字数，{#leave}代表还可以输入多少字符数
        //,wordOverFlowMsg:'<span style="color:red;">你输入的字符个数已经超出最大允许值，服务器可能会拒绝保存！</span>'    //超出字数限制提示
        
		//fontfamily
        //字体
        ,'fontfamily': [['宋体',["宋体", "SimSun"]], ['楷体',["楷体", "楷体_GB2312", "SimKai"]], ['隶书',["隶书", "SimLi"]], ['黑体',["黑体", "SimHei"]], ['andale mono',["andale mono"]], ['arial',["arial", "helvetica", "sans-serif"]], ['arial black',["arial black", "avant garde"]], ['comic sans ms',["comic sans ms"]], ['impact',["impact", "chicago"]], ['times new roman',["times new roman"]]]
        
		//fontsize
        //字号
        ,'fontsize': ['10', '11', '12', '14', '16', '18', '20', '24', '36']
        
		//rowspacingtop
        //段间距 值和显示的名字相同
        ,'rowspacingtop':['5']
        
		//rowspacingBottom
        //段间距 值和显示的名字相同
        ,'rowspacingbottom':['5']
        
		//lineheight
        //行内间距 值和显示的名字相同
        ,'lineheight': ['1']
        
    };
})();
