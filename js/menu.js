//加载一级菜单
function loadFirstMenu(data) {
    let result = "";
    $.each(data, function (index, obj) {
        let content = '<li class="layui-nav-item">';
        if (index === 0) {//默认展开第一菜单
            content = '<li class="layui-nav-item layui-nav-itemed">';
        }
        content += '<a href="javascript:;" >' + obj.title + '</a>';
        //这里是添加所有的子菜单
        content += loadChildMenu(obj);
        content += '</li>';
        result += content;
    });
    return result;
}

//加载子菜单
function loadChildMenu(obj) {
    let content = "";
    if (obj) {
        if (obj.children != null && obj.children.length > 0) {
            content += '<dl class="layui-nav-child">';
        } else {
            content += '<dl>';
        }
        if (obj.children != null && obj.children.length > 0) {
            $.each(obj.children, function (i, note) {
                content += '<dd>';
                content += '<a href="javascript:;" >' + note.title + '</a>';
                if (note.children == null) {
                    return;
                }
                content += loadChildMenu(note);
                content += '</dd>';
            });
            content += '</dl>';
        }
    }
    return content;
}