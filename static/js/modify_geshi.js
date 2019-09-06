//修改磁盘容量显示数字
function cmdb_index_disk() {
   disk_str = $("#disk").html();
   disk_num = disk_str.replace(/[^0-9.]/ig,"");
   $("#disk").html(disk_num);
}