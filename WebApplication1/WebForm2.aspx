<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="WebApplication1.WebForm2" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
    <style>
        #progress_bar
        {
            margin: 10px 0;
            padding: 3px;
            border: 1px solid #000;
            font-size: 14px;
            clear: both;
            opacity: 0;
            -moz-transition: opacity 1s linear;
            -o-transition: opacity 1s linear;
            -webkit-transition: opacity 1s linear;
        }
        #progress_bar.loading
        {
            opacity: 1.0;
        }
        #progress_bar .percent
        {
            background-color: #99ccff;
            height: auto;
            width: 0;
        }
        #holder
        {
            border: 10px dashed #ccc;
            width: 300px;
            height: 300px;
            margin: 20px auto;
        }
        #holder.hover
        {
            border: 10px dashed #333;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <article>
        <div id="holder"></div> 
    </article>
    <input type="file" id="files" name="file" />
    <div id="progress_div">
        <div id="progress_bar">
            <div class="percent">
                0%</div>
        </div>
        <button onclick="abortRead();" style="display: none">
            Cancel read</button>
    </div>
    <script>
        // Check for the various File API support.
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            // Great success! All the File APIs are supported.
        } else {
            alert('The File APIs are not fully supported in this browser.');
        }
        var reader;
        var progress = document.querySelector('.percent');
        //取消读取
        function abortRead() {
            reader.abort();
        }

        function errorHandler(evt) {
            switch (evt.target.error.code) {
                case evt.target.error.NOT_FOUND_ERR:
                    alert('File Not Found!');
                    break;
                case evt.target.error.NOT_READABLE_ERR:
                    alert('File is not readable');
                    break;
                case evt.target.error.ABORT_ERR:
                    break; // noop
                default:
                    alert('An error occurred reading this file.');
            };
        }

        function updateProgress(evt) {
            // evt is an ProgressEvent.
            if (evt.lengthComputable) {
                var percentLoaded = Math.round((evt.loaded / evt.total) * 100);
                // Increase the progress bar length.
                if (percentLoaded < 100) {
                    progress.style.width = percentLoaded + '%';
                    progress.textContent = percentLoaded + '%';
                }
            }
        }

        function handleFileSelect(evt) {
            this.className = '';
            // Reset progress indicator on new file selection.
            progress.style.width = '0%';
            progress.textContent = '0%';
            reader = new FileReader();
            reader.onerror = errorHandler;
            reader.onprogress = updateProgress;
            reader.onabort = function (e) {
                alert('File read cancelled');
            };
            reader.onloadstart = function (e) {
                document.getElementById('progress_bar').className = 'loading';
                $("#progress_div :button").show();
            };
            reader.onload = function (e) {
                // Ensure that the progress bar displays 100% at the end.
                progress.style.width = '100%';
                progress.textContent = '100%';
                setTimeout("document.getElementById('progress_bar').className='';", 2000);
                $("#progress_div :button").hide()
                alert(e.target.result);

            }

            // Read in the image file as a binary string.
            //reader.readAsBinaryString(evt.target.files[0]);//点击
            var length = evt.dataTransfer.files.length;
            try {

                for (var i = 0; i < length; i++) {
                    reader.readAsBinaryString(evt.dataTransfer.files[i]); //拖拽
                }
            } catch (e) {
                alert(e.message);
            }
            //alert(evt.dataTransfer.files.length);
        }


        function handleDragOver(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
        }

        //document.getElementById('files').addEventListener('change', handleFileSelect, false);

        var dropZone = document.getElementById('holder');
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('drop', handleFileSelect, false);

        dropZone.ondragover = function () { this.className = 'hover'; return false; }; //设置效果
        dropZone.ondragend = function () { this.className = ''; return false; };
    </script>
    </form>
</body>
</html>
