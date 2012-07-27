var watermark = 'Search the Web';
var timer = -1;
var mouseX = 0;
var mouseY = 0;
var currentTitle = null;
var removeTimerId = -1;
var removeTooltipTimerId = -1;

var mostPopularDef = [
							{ id: 1, x: 548, y: 0, width: 298, height: 215, color: '#178e8f', icon: '', url: '', title: '', fontSize: '34px', hoverColor: "#1cacae" },
							{ id: 2, x: 0, y: 298, width: 298, height: 215, color: '#c74c30', icon: '', url: '', title: '', fontSize: '34px', hoverColor: "#df6242" },
							{ id: 3, x: 234, y: 77, width: 302, height: 138, color: '#8b3d93', icon: '', url: '', title: '', fontSize: '30px', hoverColor: "#a344ad" },
							{ id: 4, x: 308, y: 298, width: 302, height: 138, color: '#7dab34', icon: '', url: '', title: '', fontSize: '30px', hoverColor: "#5baf5a" },
							{ id: 5, x: 0, y: 0, width: 222, height: 138, color: '#e17616', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#f98924" },
							{ id: 6, x: 0, y: 150, width: 222, height: 138, color: '#379dcf', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#34b0ec" },
							{ id: 7, x: 620, y: 298, width: 222, height: 102, color: '#a32b55', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#c02e62" },
							{ id: 8, x: 620, y: 410, width: 222, height: 102, color: '#3777cf', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#3482ec" },
							{ id: 9, x: 391, y: 0, width: 146, height: 66, color: '#7dab34', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#8ec736" },
							{ id: 10, x: 234, y: 0, width: 146, height: 66, color: '#a49d17', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#c5bc19" },
                            { id: 11, x: 464, y: 446, width: 146, height: 66, color: '#bc2e30', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#da2e31" },
                            { id: 12, x: 308, y: 446, width: 146, height: 66, color: '#575ae2', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#6269ff" }
						]

var mostPopular = [
							{ id: 1, x: 548, y: 0, width: 298, height: 215, color: '#178e8f', icon: '', url: '', title: '', fontSize: '34px', hoverColor: "#1cacae" },
							{ id: 2, x: 0, y: 298, width: 298, height: 215, color: '#c74c30', icon: '', url: '', title: '', fontSize: '34px', hoverColor: "#df6242" },
							{ id: 3, x: 234, y: 77, width: 302, height: 138, color: '#8b3d93', icon: '', url: '', title: '', fontSize: '30px', hoverColor: "#a344ad" },
							{ id: 4, x: 308, y: 298, width: 302, height: 138, color: '#7dab34', icon: '', url: '', title: '', fontSize: '30px', hoverColor: "#5baf5a" },
							{ id: 5, x: 0, y: 0, width: 222, height: 138, color: '#e17616', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#f98924" },
							{ id: 6, x: 0, y: 150, width: 222, height: 138, color: '#379dcf', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#34b0ec" },
							{ id: 7, x: 620, y: 298, width: 222, height: 102, color: '#a32b55', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#c02e62" },
							{ id: 8, x: 620, y: 410, width: 222, height: 102, color: '#3777cf', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#3482ec" },
							{ id: 9, x: 391, y: 0, width: 146, height: 66, color: '#7dab34', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#8ec736" },
							{ id: 10, x: 234, y: 0, width: 146, height: 66, color: '#a49d17', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#c5bc19" },
                            { id: 11, x: 464, y: 446, width: 146, height: 66, color: '#bc2e30', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#da2e31" },
                            { id: 12, x: 308, y: 446, width: 146, height: 66, color: '#379dcf', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#34b0ec" }
						]
var mostHits = [
						{ id: 1, x: 0, y: 0, width: 298, height: 215, color: '#8b3d93', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#a344ad" },
{ id: 2, x: 232, y: 299, width: 298, height: 215, color: '#7dab34', icon: '', url: '', title: '', fontSize: '30px', hoverColor: "#8ec736" },
{ id: 3, x: 540, y: 299, width: 302, height: 138, color: '#479545', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#54a952" },
{ id: 4, x: 308, y: 77, width: 302, height: 138, color: '#c74c30', icon: '', url: '', title: '', fontSize: '30px', hoverColor: "#df6242" },
{ id: 5, x: 0, y: 376, width: 222, height: 138, color: '#a32b55', icon: '', url: '', title: '', fontSize: '34px', hoverColor: "#c02e62" },
{ id: 6, x: 620, y: 0, width: 222, height: 102, color: '#a49d17', icon: '', url: '', title: '', fontSize: '34px', hoverColor: "#c5bc19" },
	{ id: 7, x: 620, y: 113, width: 222, height: 102, color: '#3777cf', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#3482ec" },
	{ id: 8, x: 0, y: 229, width: 222, height: 138, color: '#e17616', icon: '', url: '', title: '', fontSize: '26px', hoverColor: "#f98924" },
	       { id: 9, x: 696, y: 448, width: 146, height: 66, color: '#bc2e30', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#da2e31" },
		   	{ id: 10, x: 308, y: 0, width: 146, height: 66, color: '#575ae2', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#6269ff" },
			{ id: 11, x: 463, y: 0, width: 146, height: 66, color: '#178e8f', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#1cacae" },
			  { id: 12, x: 540, y: 448, width: 146, height: 66, color: '#379dcf', icon: '', url: '', title: '', fontSize: '22px', hoverColor: "#34b0ec" }
						]
var apps = [
							{ id: 1, x: 0, y: 0, width: 160, height: 160, color: '#c74c30', icon: 'digital/ffLogo.png', iconSize: 2, url: 'https://addons.mozilla.org/en-US/firefox', title: 'FireFox addons', fontSize: '41px' },
							{ id: 2, x: 171, y: 0, width: 160, height: 160, color: '#7dab34', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },
							{ id: 3, x: 342, y: 0, width: 160, height: 160, color: '#8b3d93', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },
							{ id: 4, x: 513, y: 0, width: 160, height: 160, color: '#379dcf', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },
							{ id: 5, x: 684, y: 0, width: 160, height: 160, color: '#a49d17', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },
                            { id: 6, x: 0, y: 302, width: 160, height: 160, color: '#178e8f', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },
							{ id: 7, x: 171, y: 302, width: 160, height: 160, color: '#3777cf', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },
							{ id: 8, x: 342, y: 302, width: 160, height: 160, color: '#a32b55', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },
							{ id: 9, x: 513, y: 302, width: 160, height: 160, color: '#fe9d3e', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },
							{ id: 10, x: 684, y: 302, width: 160, height: 160, color: '#479545', icon: '', iconSize: 1, url: '', title: '', fontSize: '41px' },

						]

if (!$.browser.mozilla) {
    apps[0] = { id: 1, x: 0, y: 0, width: 160, height: 160, color: '#c74c30', icon: 'digital/chromestore_icon.png', iconSize: 2, url: 'https://chrome.google.com/webstore/category/home', title: 'Web Store', fontSize: '41px' };
}

jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", (($(window).height() - this.outerHeight()) / 2) +
                                                $(window).scrollTop() + "px");
    this.css("left", (($(window).width() - this.outerWidth()) / 2) +
                                                $(window).scrollLeft() + "px");
    return this;
}


var domainEntity = function () {
    this.protocol;
    this.baseUrl;
    this.ending;
}
function determineIconByUrl(url) {

    var domainEnd = getDomainAndEnding(url);
    var protocol = getProtocol(url);
    return "/speedDial/logos/" + domainEnd.baseUrl + domainEnd.ending;
}
function createStructre1Json(id, title, icon, url) {
    var index = id % 12;

    return { "id": id, "title": title, "icon": icon, "url": url, 'x': mostHits[index].x, 'y': mostHits[index].y, 'width': mostHits[index].width, 'height': mostHits[index].height, 'color': mostHits[index].color, 'fontSize': mostHits[index].fontSize, 'hoverColor': mostHits[index].hoverColor };
}
function getProtocol(url) {
    var protocol;
    if (url.indexOf('http://') > -1) {
        protocol = 'http://';
        return protocol;
    }
    if (url.indexOf('https://') > -1) {
        protocol = 'https://';
        return protocol;
    }
    return;
}

function getDomainAndEnding(url) {
    if (url != null && url != 'undefined') {
        var protocol = getProtocol(url);

        url = url.replace(protocol, '');
        url = url.split('/')[0];

        var lastIndex = url.lastIndexOf('.');
        var dom = new domainEntity();
        dom.protocol = protocol;
        dom.baseUrl = url.substring(0, lastIndex);
        dom.ending = url.substring(lastIndex, url.length);
        return dom;
    }
    return;
}
function getSiteName(url) {
    var webSite = url.substring(url.indexOf('/') + 1);
    webSite = webSite.split('/')[1];
    if (webSite != null && webSite != 'undefined') {

        var arr = webSite.split('.');
        var l = (Math.round(arr.length / 2)) - 1;
        webSite = arr[l];
        return webSite;

    }

    return;
}
function drawDefaultImage(div, x, y, width, height, image, isApp) {
    var img = new Image();
    if (!isApp || typeof isApp == 'undefined') {
        img.src = 'digital/defaultSites.png';
    }
    else {
        img.src = 'digital/defaultApps.png';
    }

    img.addEventListener("load", function () {

        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var newImage = new Image();
        var scale = 0;
        width = width;
        canvas.style.height = img.height + 2;
        canvas.style.width = img.width + 2;
        canvas.height = img.height;
        canvas.width = img.width;
        var factor = -0.3;

        if (width > img.width) {
            //do nothing
            if (height < img.height) {
                scale = (height / img.height) + factor;
                ctx.scale(scale, scale);
            }
        } else {
            scale = (width / img.width) + factor;
            ctx.scale(scale, scale);
        }
        ctx.drawImage(img, 0, height);
        div.append(canvas);
    }, false);
    return;
};



function scaleImage(div, x, y, width, height, image) {
    var position = div.attr('id').split('_')[1];

    if (div.attr('id').indexOf('app') == -1) {

        var img = new Image();
        var siteName = getDomainAndEnding(image.url);
        var protocol = getProtocol(image.url);
        var title = image.url.replace(protocol, '');
        div.attr('tooltip', (title.replace('www.', '').substring(0, 54)));
        var key = logosDic[siteName.baseUrl + siteName.ending];

        if (key != 'undefined' && key != null) {

            var imageSrc = 'logos/' + logos[key] + '/';
            if (width == 298) {
                imageSrc = imageSrc + 'xl_size.png';
            } else if (width == 302) {
                imageSrc = imageSrc + 'l_size.png';
            } else if (width == 222) {
                imageSrc = imageSrc + 'm_size.png';
            } else if (width == 146) {
                imageSrc = imageSrc + 's_size.png';
            }
            var innerDiv = document.createElement('div');
            innerDiv.style.width = '100%';
            innerDiv.style.height = '100%';
            innerDiv.setAttribute('id', div.attr('id') + '_img');
            div.append(innerDiv);
            $('#' + div.attr('id') + '_img').css({ 'background-image': 'url(' + imageSrc + ')', 'background-repeat': 'no-repeat', 'background-position': 'center center' });
        } else {
            div.css({ 'font-family': 'DroidSans',
                'color': 'white',
                'font-size': image.fontSize,
                'line-height': height + 'px',
                'text-align': 'center',
                'overflow': 'hidden'
            });
            var divTitle = document.createElement('div');
            divTitle.style.width = (width - 28) + 'px';
            divTitle.style.height = (height - 10) + 'px';
            divTitle.style.padding = '5px';
            divTitle.style.margin = 'auto';
            divTitle.style.overflow = 'hidden';
            divTitle.style.lineHeight = (height - 10) + 'px'; ;
            if (!($.trim(image.title) === '')) {
                if (position > 8) {
                    image.title = image.title.substring(0, 8);
                }
                divTitle.innerHTML = image.title.substring(0, 54);
                div.append(divTitle);
            }
            else {
                if (position > 8) {
                    siteName = siteName.substring(0, 8);
                }
                divTitle.innerHTML = siteName;
                div.append(divTitle);
            }
        }
    }
    else {
        div.css({ 'font-family': 'DroidSans',
            'color': 'white',
            'font-size': image.fontSize,
            'line-height': height + 'px',
            'text-align': 'center',
            'overflow': 'hidden'
        });
        var divTitle = document.createElement('div');
        divTitle.style.width = (width - 10) + 'px';
        divTitle.style.height = (height - 10) + 'px';
        divTitle.style.marginLeft = '5px';
        divTitle.style.marginTop = '5px';
        divTitle.style.overflow = 'hidden';
        divTitle.style.lineHeight = (height - 10) + 'px'; ;
        if (!($.trim(image.title) === '')) {
            if (position > 9) {
                image.title = image.title.substring(0, 8);
            }
            divTitle.innerHTML = image.title.substring(0, 14);

            div.append(divTitle);
        }
        else {
            if (position > 9) {
                siteName = siteName.substring(0, 8);
            }
            divTitle.innerHTML = siteName;
            div.append(divTitle);
        }
    }

}

function init(data) {
    // clear elements if exist

    $('div[id^=mostPopular_], div[id^=apps_]').remove();
    $('.mostHitsDiv > div').remove();

    if (data != 'undefined' && data != null) {


        for (var i = 1; i < 9 + 1; i++) {

            appsItem = data.addons[i - 1];

            if (appsItem) {
                apps[i].id = appsItem.id;
                apps[i].icon = appsItem.icon;
                apps[i].title = appsItem.title;
                apps[i].url = appsItem.url;
            }
        }

        for (var i = 0; i < 12; i++) {
            popularItem = data.mostPopular[i];

            if (popularItem != 'undefined' && popularItem != null) {
                mostPopular[i].icon = popularItem.icon;
                mostPopular[i].url = popularItem.url;
                mostPopular[i].title = popularItem.title;

            }
            else {
                mostPopular[i].url = '';
                mostPopular[i].title = '';
            }

        }

        for (var i = 0; i < data.bookmarks.length; i++) {
            lastVisitItem = data.bookmarks[i];
            if (lastVisitItem != 'undefined' && lastVisitItem != null) {
                if (mostHits[i]) {
                    mostHits[i].url = lastVisitItem.url;
                    mostHits[i].icon = lastVisitItem.icon;
                    mostHits[i].title = lastVisitItem.title;
                }
                else {
                    mostHits.push(createStructre1Json(i, lastVisitItem.title, lastVisitItem.icon, lastVisitItem.url));

                }
            }

        }


        //                console.log('most used item Number: ' + i + ' url : ' + data.mostPopular[i].url + ' hits: ' + data.mostPopular[i].hits);
    }

    draw();
}

function is_child_of(parent, child) {
    if (child != null) {
        while (child.parentNode) {
            if ((child = child.parentNode) == parent) {
                return true;
            }
        }
    }
    return false;
}

function fixOnMouseOut(element, event, JavaScript_code) {
    var current_mouse_target = null;
    if (event.toElement) {
        current_mouse_target = event.toElement;
    } else if (event.relatedTarget) {
        current_mouse_target = event.relatedTarget;
    }
    if (!is_child_of(element, current_mouse_target) && element != current_mouse_target) {
        eval(JavaScript_code);
    }
}

function generateAppDefaultSquare(item, itemPosition, divId) {

    var div = document.createElement('div');
    div.style.backgroundColor = 'rgba(32,109,147,0.3)';
    div.style.height = item.height;
    div.style.width = item.width;
    div.style.position = 'absolute';
    div.style.top = item.y + 'px';
    div.style.left = item.x + 'px';
    div.id = divId + '_' + itemPosition;

    //generateIconSquare
    var img = document.createElement('img');
    img.src = 'digital/appNoIcon.png';
    img.setAttribute('class', 'defaultIconImage');
    div.appendChild(img);
    document.getElementById(divId + 'Div').appendChild(div);
}

function generateAppsSquare(item, itemPosition, divId) {

    var div = document.createElement('div');
    div.style.backgroundColor = item.color;
    div.style.height = item.height;
    div.style.width = item.width;
    div.style.position = 'absolute';
    div.style.cursor = 'pointer';
    div.style.top = item.y + 'px';
    div.style.left = item.x + 'px';
    div.id = divId + '_' + itemPosition;
    div.setAttribute('class', 'square');
    if (item.url && item.url.length > 1) {
        div.onclick = function () {
            window.open(item.url, 'appUrl');
        }
    }
    //generateIconSquare
    var iconDiv = document.createElement('div');
    var img = document.createElement('img');


    if (!item.icon || item.icon.length < 10) {

        img = document.createElement('div');
        $(img).css({ 'background-image': 'url(digital/clearIcon.png)' });
        $(img).css({ 'background-position': '0px 0px' });
        $(img).css({ 'background-color': item.color });
        $(img).css({ 'position': 'relative', 'top': '6px', 'left': '4px', 'height': '64px', 'width': '64px' });

    }
    else {
        img.src = item.icon;
    }

    if (item.iconSize == 1) {
        img.setAttribute('class', 'iconImageSmall');
        iconDiv.setAttribute('class', 'appSmallIcon');
        iconDiv.appendChild(img);
    } else {
        iconBorder = document.createElement('div');
        iconBorder.setAttribute('class', 'iconBevel');
        img.setAttribute('class', 'iconImageBig');


        iconDiv.setAttribute('class', 'appBigIcon');
        iconBorder.appendChild(img);
        iconDiv.appendChild(iconBorder);

    }
    div.appendChild(iconDiv);
    //create title div
    var titleDiv = document.createElement('div');
    titleDiv.style.width = item.width;
    titleDiv.style.position = 'absolute';
    titleDiv.style.top = (item.y + item.height + 10) + 'px';
    titleDiv.style.left = item.x + 'px';
    titleDiv.setAttribute('class', 'squareTitle');
    document.getElementById(divId + 'Div').appendChild(div);
    document.getElementById(divId + 'Div').appendChild(titleDiv);
    $(titleDiv).html(item.title);
}

function generateSquare(item, itemPosition, divId, isRemovable) {

    var div = document.createElement('div');
    div.style.backgroundColor = item.color;
    div.style.height = item.height;
    div.style.width = item.width;
    div.style.position = 'absolute';
    div.style.top = item.y + 'px';
    div.style.left = item.x + 'px';
    div.id = divId + '_' + itemPosition;
    div.setAttribute('class', 'square');


    if (item.url && item.url != 'undefined') {
        $(div).on("mouseenter", function (event) {
            removeTimerId = setTimeout(function () {
                var removeIcon = document.getElementById(divId + '_' + itemPosition + '_remove');
                if (removeIcon) {
                    removeIcon.style.display = 'block';
                }

            }, 1000);
        });
        $(div).on("mouseout", function (event) {
            var current_mouse_target = null;
            if (event.toElement) {
                current_mouse_target = event.toElement;
            } else if (event.relatedTarget) {
                current_mouse_target = event.relatedTarget;
            }
            if (!is_child_of(this, current_mouse_target) && this != current_mouse_target) {
                clearTimeout(removeTimerId);
                var removeIcon2 = document.getElementById(divId + '_' + itemPosition + '_remove');
                if (removeIcon2) {
                    removeIcon2.style.display = 'none';
                }

            }
        });
        div.onclick = function () {
            window.open(item.url, "_blank");
        };
        div.style.cursor = 'pointer';
    }

    // in case isRemovable=true add the X to the square
    if (isRemovable) {

        var removeDiv = document.createElement('div');
        removeDiv.style.height = '12px';
        removeDiv.style.width = '12px';
        removeDiv.style.position = 'absolute';
        removeDiv.style.top = 5 + 'px';
        removeDiv.style.left = (item.width - 17) + 'px';
        removeDiv.style.zIndex = '9999';
        removeDiv.style.display = 'none';
        removeDiv.id = divId + '_' + itemPosition + '_remove';
        removeDiv.setAttribute('class', 'square-remove');

        $(removeDiv).on("click", function (event) {
            /* this is for passing site to delete */
            $('.square-remove').hide();
            $('.remove-title').hide();
            if (!localStorage.dontShowCheck || (localStorage.dontShowCheck) == 'undefined') {
                $('#hidden').val(item.url);
                $('#blacklistPopup').show().center();
                $('#modalPageBlackList').css({
                    display: "block"
                });
            }
            else {
                $('#hidden').val(item.url);
                var siteForDeleteCustomEvent = document.createEvent('Event');
                siteForDeleteCustomEvent.initEvent('siteForDelete', false, true);
                window.dispatchEvent(siteForDeleteCustomEvent);
            }

            event.stopPropagation();
            /* ************************* */
            return true;
        });

        $(removeDiv).on("mouseenter", function (event) {
            var position = $(this).position();
            var removeTooltipTimerId = setTimeout(function (event) {
                var removeTooltip = $('<span class="remove-title" id="' + divId + '_' + itemPosition + '_remove_tooltip">Remove from this site</span>');
                killTimer(timer);
                $('.remove-title').hide();
                $(removeTooltip).css({ left: mouseX - 155, top: mouseY + 15, zIndex: 999999 }).appendTo('body').show();
            }, 1);
        });
        $(removeDiv).on("mouseout", function (event) {
            clearTimeout(removeTooltipTimerId);
            //$('.title').show();
            $('#' + divId + '_' + itemPosition + '_remove_tooltip').remove();
        });
        removeDiv.style.cursor = 'pointer';
        div.appendChild(removeDiv);
    }

    document.getElementById(divId + 'Div').appendChild(div);


    $('#' + divId + '_' + itemPosition).mouseover(function () {
        $(this).css('background-color', item.hoverColor);
        //  $('.removeSiteButton').show();


        $('#' + divId + '_' + itemPosition).mouseout(function () {
            $(this).css('background-color', item.color);
        });

    });


    scaleImage($('#' + divId + '_' + itemPosition), item.x, item.y, item.width, item.height, item);

}
function generateDefaultSquare(item, itemPosition, divId, isApp) {
    var div = document.createElement('div');

    div.style.height = item.height;
    div.style.width = item.width;
    div.style.position = 'absolute';
    div.style.top = item.y + 'px';
    div.style.left = item.x + 'px';
    div.style.overflow = 'hidden';
    div.id = divId + '_' + itemPosition;
    var img = document.createElement('img');
    img.setAttribute('style', 'position:absolute;bottom:0px;left:-3px;');

    if (!isApp || typeof isApp == 'undefined') {
        img.src = 'digital/defaultSites_' + item.height + '.png';
    }
    else {
        img.src = 'digital/defaultApps.png';
    }

    div.appendChild(img);
    document.getElementById(divId + 'Div').appendChild(div);
    $('#' + divId + '_' + itemPosition).addClass('defaultBox');
}

function htmlEncode(value) {
    return $('<span/>').text($.trim(value)).html();
}

function draw() {
    //position screen;
    var leftPosition = ($(window).innerWidth() - 909) / 2;
    $('#wrapper').css({ 'left': leftPosition });
    //create animations
    var cssAnimation = document.createElement('style');
    cssAnimation.type = 'text/css';

    var moveToMostPopularMoz = document.createTextNode('@-moz-keyframes slideToMostPopular{0%{left:' + leftPosition + 'px;}20%{left:' + (leftPosition - 512) + 'px;}100%{left:' + (leftPosition - 909) + 'px;}}');
    var moveToMostPopularWebKit = document.createTextNode('@-webkit-keyframes slideToMostPopular{0%{left:' + leftPosition + 'px;}20%{left:' + (leftPosition - 512) + 'px;}100%{left:' + (leftPosition - 909) + 'px;}}');

    var moveToFavMoz = document.createTextNode('@-moz-keyframes moveToFav{0%{left:' + (leftPosition - 909) + 'px;}20%{left:' + ((leftPosition - 909) + 512) + 'px;}100%{left:' + ((leftPosition - 909) + 909) + 'px;}}');
    var moveToFavWebKit = document.createTextNode('@-webkit-keyframes moveToFav{0%{left:' + (leftPosition - 909) + 'px;}20%{left:' + ((leftPosition - 909) + 512) + 'px;}100%{left:' + ((leftPosition - 909) + 909) + 'px;}}');

    var moveToAppsMoz = document.createTextNode('@-moz-keyframes moveToApps{0%{left:' + (leftPosition - 909) + 'px;}20%{left:' + ((leftPosition - 909) - 512) + 'px;}100%{left:' + ((leftPosition - 909) - 909) + 'px;}}');
    var moveToAppsWebKit = document.createTextNode('@-webkit-keyframes moveToApps{0%{left:' + (leftPosition - 909) + 'px;}20%{left:' + ((leftPosition - 909) - 512) + 'px;}100%{left:' + ((leftPosition - 909) - 909) + 'px;}}');

    var moveBackToMostPopularMoz = document.createTextNode('@-moz-keyframes moveBackToMostPopular{0%{left:' + (leftPosition - 1818) + 'px;}20%{left:' + ((leftPosition - 1818) + 512) + 'px;}100%{left:' + ((leftPosition - 1818) + 909) + 'px;}}');
    var moveBackToMostPopularWebKit = document.createTextNode('@-webkit-keyframes moveBackToMostPopular{0%{left:' + (leftPosition - 1818) + 'px;}20%{left:' + ((leftPosition - 1818) + 512) + 'px;}100%{left:' + ((leftPosition - 1818) + 909) + 'px;}}');

    var moveBackToAppsMoz = document.createTextNode('@-moz-keyframes moveBackToApps{0%{left:' + (leftPosition - 909) + 'px;}20%{left:' + ((leftPosition - 909) - 512) + 'px;}100%{left:' + ((leftPosition - 909) - 909) + 'px;}}');
    var moveBackToAppsWebKit = document.createTextNode('@-webkit-keyframes moveBackToApps{0%{left:' + (leftPosition - 909) + 'px;}20%{left:' + ((leftPosition - 909) - 512) + 'px;}100%{left:' + ((leftPosition - 909) - 909) + 'px;}}');


    cssAnimation.appendChild(moveToMostPopularMoz);
    cssAnimation.appendChild(moveToMostPopularWebKit);
    cssAnimation.appendChild(moveToFavMoz);
    cssAnimation.appendChild(moveToFavWebKit);
    cssAnimation.appendChild(moveToAppsMoz);
    cssAnimation.appendChild(moveToAppsWebKit);
    cssAnimation.appendChild(moveBackToMostPopularMoz);
    cssAnimation.appendChild(moveBackToMostPopularWebKit);
    cssAnimation.appendChild(moveBackToAppsMoz);
    cssAnimation.appendChild(moveBackToAppsWebKit);

    document.getElementsByTagName("head")[0].appendChild(cssAnimation);

    for (var i = 0; i < apps.length; i++) {

        if (apps[i].title !== '') {

            generateAppsSquare(apps[i], i, 'apps');
        }
        else {

            generateAppDefaultSquare(apps[i], i, 'apps');
        }

    }
    for (var i = 0; i < mostPopular.length; i++) {
        if (mostPopular[i].url != '') {
            generateSquare(mostPopular[i], i, 'mostPopular', true);
        }
        else {
            generateDefaultSquare(mostPopular[i], i, 'mostPopular');

        }
    }
    var numOfPages = Math.ceil(mostHits.length / 12);
    if (numOfPages == 0) {
        numOfPages = numOfPages + 1;
    }

    for (var i = 0; i < numOfPages; i++) {
        $('#paging_' + (i + 1)).show();
    }
    $('.paging-wrapper').width((numOfPages * 72) + ((numOfPages - 1) * 19));

    var tempMostHits = mostHits.slice(0);
    for (var i = 0; i < numOfPages; i++) {
        for (var z = 0; z < 12; z++) {
            di = i + 1;
            if (tempMostHits[z] && tempMostHits[z].url) {
                generateSquare(tempMostHits[z], z, 'mostHits' + di);
            }
            else {
                generateDefaultSquare(mostHits[z], z, 'mostHits' + di);
            }
        }
        tempMostHits.splice(0, 12);
    }
    $('#sb1').focus();
}

window.addEventListener('pageshow', function () {
    if ($.browser.mozilla) {
        for (var i = 1; i < 4; i++) {
            $('#sb' + i).val(watermark);
            $('#sb' + i).addClass('watermark');
        }
    }
}, false);

function search(valToSearch) {
    if ($.trim(valToSearch) != '') {
        window.open("http://mystart.incredibar.com/mb126?search=" + encodeURIComponent(valToSearch), "_blank");
    }
}

function killTimer() {

    try {
        clearInterval(timer);
    } catch (e) { }
}

$(document).ready(function () {
    if ($.browser.mozilla) {
        $('.tutorial').hide();
    }
    if (screen.height > 1000) {
        $('.wrapper').css('top', '150px');
    }
    $('#restoreButton').click(function (event) {
        var clearBlackListCustomEvent = document.createEvent('Event');
        clearBlackListCustomEvent.initEvent('clearBlackList', true, true);
        window.dispatchEvent(clearBlackListCustomEvent);
        $('.frameFF').hide();
        $('.frameFFBlack').hide();
        event.stopPropagation();
        return true;
    });
    for (var i = 1; i < 4; i++) {
        $('#tutorial' + i).click(function () {
            $('#modalPage').css({
                display: "block"
            });
            $('.frame').css({
                display: "block",
                position: "absolute",
                left: Math.floor((($(this).offset().left + $(this).width()) - 540)) + "px",
                top: Math.floor(($(this).offset().top + 28)) + "px"
            });
            $('.frame').show();
            $('.pointer').css({
                display: "block",
                position: "absolute",
                left: Math.floor((($(this).offset().left + $(this).width()) - 100)) + "px",
                top: Math.floor(($(this).offset().top + 20)) + "px"
            });
            $('.pointer').show();
            var height = '11px';
        });
    }

    $('#exitPopup').click(function () {

        $('#modalPage').hide();
        $('.hatDiv').hide();
    });
    for (var i = 1; i < 4; i++) {
        if ($('#sb' + i).val() == '') {
            $('#sb' + i).val(watermark);
            $('#sb' + i).addClass('watermark');
            $('#sb' + i).keypress(function (event) {
                if (event.which == 13) {
                    event.preventDefault();
                    if (!$(this).hasClass('watermark')) {
                        var value = $(this).val();
                        if (value != '') {
                            search(value);
                        }
                    }
                }
            });
        }
        $('#sb' + i).focus(function () {
            if ($(this).hasClass('watermark')) {
                $(this).val('');
                $(this).removeClass('watermark');
            }
        });
        $('#sb' + i).blur(function () {
            if ($(this).val() === '') {
                $(this).val(watermark);
                $(this).addClass('watermark');
            }
        });
    }
    $('.searchButton').mousedown(function () {
        $(this).addClass('searchButtonSelected');
    });
    $('#removeButton').click(function (event) {
        localStorage.dontShowCheck = $('#dontShowCheck').attr('checked');
        var siteForDeleteCustomEvent = document.createEvent('Event');
        siteForDeleteCustomEvent.initEvent('siteForDelete', false, true);
        window.dispatchEvent(siteForDeleteCustomEvent);
        $('#blacklistPopup').hide();
        $('#modalPageBlackList').css({
            display: "none"
        });
        event.stopPropagation();
        return true;
    });

    $('#cancelButton').click(function () {
        $('#blacklistPopup').hide();
        $('#modalPage').hide();
        $('#dontShowCheck').attr('checked', false);
        $('#modalPageBlackList').css({
            display: "none"
        });
        return;
    });
    $('.searchButton').mouseup(function () {
        $(this).removeClass('searchButtonSelected');
    });


    $('#initDiv').bind('initEvent', function () {
        var eventData;

        if (!$.browser.mozilla) {
            eventData = document.getElementById('initDiv').innerText;
        }
        else {
            eventData = document.getElementById('initDiv').textContent;
        }

        init(JSON.parse(eventData));
    });
    $('.moveBack').click(function () {
        if (!$(this).hasClass('flipArrowDown')) {
            _gaq.push(['_trackEvent', 'pageAction', 'pageButtonClick', 'right']);
        }
        else {
            _gaq.push(['_trackEvent', 'pageAction', 'pageButtonClick', 'left']);
        }
        if ($('#wrapper').hasClass('moveToApps') && $('#wrapper').hasClass('moveBackToMostPopular')) {
            $('#wrapper').addClass('moveBackToApps');
            $('#wrapper').removeClass('moveBackToMostPopular');
            $(this).removeClass('flipArrowUp');
            $(this).addClass('flipArrowDown');
            return;
        }
        if ($('#wrapper').hasClass('moveToApps')) {
            $('#wrapper').addClass('moveBackToMostPopular');
            $('#wrapper').removeClass('moveBackToApps');
            $(this).removeClass('flipArrowDown');
            $(this).addClass('flipArrowUp');

        } else {
            $('#wrapper').removeClass('moveBackToMostPopular');
            $('#wrapper').addClass('moveToApps');
            $(this).removeClass('flipArrowUp');
            $(this).addClass('flipArrowDown');
        }

    });

    $('.moveNext').click(function () {
        if (!$(this).hasClass('flipArrowDown')) {
            _gaq.push(['_trackEvent', 'pageAction', 'pageButtonClick', 'right']);
        }
        else {
            _gaq.push(['_trackEvent', 'pageAction', 'pageButtonClick', 'left']);
        }

        if ($('#wrapper').hasClass('slideToMostPopular')) {
            $('#wrapper').removeClass('slideToMostPopular');
            $('#wrapper').removeClass('moveBackToMostPopular');
            $('#wrapper').removeClass('moveToApps');
            $('#wrapper').addClass('moveToFav');
            $(this).removeClass('flipArrowDown');
            $(this).addClass('flipArrowUp');
        } else {
            $('#wrapper').removeClass('moveToFav');
            $('#wrapper').addClass('slideToMostPopular');
            $(this).removeClass('flipArrowUp');
            $(this).addClass('flipArrowDown');
        }
    });

    $('.searchButton').click(function (obj) {
        var pos = obj.target.id[obj.target.id.length - 1];
        var value = $('#sb' + pos).val();
        if (!$('#sb' + pos).hasClass('watermark')) {
            search(value);
        }
    });

    $('.square').live('mouseover', function () {
        killTimer(timer);
        $('.title').hide();
        currentTitle = $(this).attr('tooltip');
        timer = setTimeout(function () {
            if (currentTitle) {

                $('.title').html(htmlEncode(currentTitle));
                $('.title').css({ left: mouseX + 20, top: mouseY + 20 });
                $('.title').show();

            }

        }, 500);

    });

    $('.square').live('mousemove', function () {
        if ($('.title').is(':visible')) {
            killTimer(timer);
            $('.title').hide();
            currentTitle = null;
        }
    });

    $('.square').live('mouseout', function () {
        killTimer(timer);
        $('.title').hide();
        currentTitle = null;
    });

    $('.pagingButton').live('click', function () {
        if ($(this).hasClass('pagingButtonActive')) return;

        var activeId = $('.pagingButtonActive').attr('id').split('_')[1];
        var id = $(this).attr('id').split('_')[1];
        $('#mostHits' + activeId + 'Div').animate({ left: '-858px' }, function () {
            $('#mostHits' + activeId + 'Div').css({ left: '858px' });
        });
        $('#mostHits' + id + 'Div').animate({ left: '0px' });
        $('.pagingButton').removeClass('pagingButtonActive');
        $(this).addClass('pagingButtonActive');

    });

    window.addEventListener('clearDontShow', function () {
        localStorage.dontShowCheck = undefined;
    });
    $(this).mousemove(function (e) {
        mouseX = e.pageX; // - gives you X position
        mouseY = e.pageY; // - gives you Y position
    });


    window.addEventListener('showRemovePopupEvent', function () {
        $('.frameFF').show();
        $('.frameFFBlack').show();
    });
    $('#ffCloseButton').click(function () {
        $('.frameFF').hide();
        $('.frameFFBlack').hide();
    });
    $('#sb1').focus();
    //init();
});

