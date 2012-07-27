﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm3.aspx.cs" Inherits="WebApplication1.WebForm3" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style>
        #drop-area
        {
            height: 50px;
            text-align: center;
            border: 2px dashed #ddd;
            padding: 10px;
            margin-bottom: 2em;
        }
        
        #drop-area .drop-instructions
        {
            display: block;
            height: 30px;
        }
        
        #drop-area .drop-over
        {
            display: none;
            font-size: 25px;
            height: 30px;
        }
        
        #drop-area.over
        {
            background: #ffffa2;
            border: 2px dashed #000;
        }
        
        #drop-area.over .drop-instructions
        {
            display: none;
        }
        
        #drop-area.over .drop-over
        {
            display: block;
        }
        
        #drop-area.over .drop-over
        {
            display: block;
            font-size: 25px;
        }
        
        
        #file-list
        {
            list-style: none;
            margin-bottom: 3em;
        }
        
        #file-list li
        {
            border-bottom: 1px solid #000;
            margin-bottom: 0.5em;
            padding-bottom: 0.5em;
        }
        
        #file-list li.no-items
        {
            border-bottom: none;
        }
        
        #file-list div
        {
            margin-bottom: 0.5em;
        }
        
        #file-list li img
        {
            max-width: 400px;
        }
        
        #file-list .progress-bar-container
        {
            width: 400px;
            height: 10px;
            border: 1px solid #555;
            margin-bottom: 20px;
        }
        
        #file-list .progress-bar-container.uploaded
        {
            height: auto;
            border: none;
        }
        
        #file-list .progress-bar
        {
            width: 0;
            height: 10px;
            font-weight: bold;
            background: #6787e3;
        }
        
        #file-list .progress-bar-container.uploaded .progress-bar
        {
            display: inline-block;
            width: auto;
            color: #6db508;
            background: transparent;
        }
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <div role="main">
            <section id="main-content">
				<p>
					<input id="files-upload" type="file" multiple="">
				</p>
				<p id="drop-area">
					<span class="drop-instructions">or drag and drop files here</span>
					<span class="drop-over">Drop files here!</span>
				</p>
				
				<ul id="file-list">
					<li class="no-items">(no files uploaded yet)</li>
				</ul>
				<script>
				    (function () {
				        var filesUpload = document.getElementById("files-upload"),
							dropArea = document.getElementById("drop-area"),
							fileList = document.getElementById("file-list");

				        function uploadFile(file) {
				            var li = document.createElement("li"),
								div = document.createElement("div"),
								img,
								progressBarContainer = document.createElement("div"),
								progressBar = document.createElement("div"),
								reader,
								xhr,
								fileInfo;

				            li.appendChild(div);

				            progressBarContainer.className = "progress-bar-container";
				            progressBar.className = "progress-bar";
				            progressBarContainer.appendChild(progressBar);
				            li.appendChild(progressBarContainer);

				            /*
				            If the file is an image and the web browser supports FileReader,
				            present a preview in the file list
				            */
				            if (typeof FileReader !== "undefined" && (/image/i).test(file.type)) {
				                img = document.createElement("img");
				                li.appendChild(img);
				                reader = new FileReader();
				                reader.onload = (function (theImg) {
				                    return function (evt) {
				                        theImg.src = evt.target.result;
				                    };
				                } (img));
				                reader.readAsDataURL(file);
				            }

				            // Uploading - for Firefox, Google Chrome and Safari
				            xhr = new XMLHttpRequest();

				            // Update progress bar
				            xhr.upload.addEventListener("progress", function (evt) {
				                if (evt.lengthComputable) {
				                    progressBar.style.width = (evt.loaded / evt.total) * 100 + "%";
				                }
				                else {
				                    // No data to calculate on
				                }
				            }, false);

				            // File uploaded
				            xhr.addEventListener("load", function () {
				                progressBarContainer.className += " uploaded";
				                progressBar.innerHTML = "Uploaded!";
				            }, false);

				            xhr.open("post", "upload/upload.php", true);

				            // Set appropriate headers
				            xhr.setRequestHeader("Content-Type", "multipart/form-data");
				            xhr.setRequestHeader("X-File-Name", file.fileName);
				            xhr.setRequestHeader("X-File-Size", file.fileSize);
				            xhr.setRequestHeader("X-File-Type", file.type);

				            // Send the file (doh)
				            xhr.send(file);

				            // Present file info and append it to the list of files
				            fileInfo = "<div><strong>Name:</strong> " + file.name + "</div>";
				            fileInfo += "<div><strong>Size:</strong> " + parseInt(file.size / 1024, 10) + " kb</div>";
				            fileInfo += "<div><strong>Type:</strong> " + file.type + "</div>";
				            div.innerHTML = fileInfo;

				            fileList.appendChild(li);
				        }

				        function traverseFiles(files) {
				            if (typeof files !== "undefined") {
				                for (var i = 0, l = files.length; i < l; i++) {
				                    uploadFile(files[i]);
				                }
				            }
				            else {
				                fileList.innerHTML = "No support for the File API in this web browser";
				            }
				        }

				        filesUpload.addEventListener("change", function () {
				            traverseFiles(this.files);
				        }, false);

				        dropArea.addEventListener("dragleave", function (evt) {
				            var target = evt.target;

				            if (target && target === dropArea) {
				                this.className = "";
				            }
				            evt.preventDefault();
				            evt.stopPropagation();
				        }, false);

				        dropArea.addEventListener("dragenter", function (evt) {
				            this.className = "over";
				            evt.preventDefault();
				            evt.stopPropagation();
				        }, false);

				        dropArea.addEventListener("dragover", function (evt) {
				            evt.preventDefault();
				            evt.stopPropagation();
				        }, false);

				        dropArea.addEventListener("drop", function (evt) {
				            traverseFiles(evt.dataTransfer.files);
				            this.className = "";
				            evt.preventDefault();
				            evt.stopPropagation();
				        }, false);
				    })();
				</script>
			</section>
        </div>
    </div>
    </form>
</body>
</html>
