function RowDblClick(rowIndex, rowData) {
    var docunid;
    if (typeof rowData == "string") {
        docunid = rowData;
    } else {
        docunid = rowData.WF_OrUnid;
    }
    if (docunid == undefined || docunid == "") {
        alert("No wf_orunid fields in datasource!");
        return;
    }
    var url =
        "form?wf_num=" + FormNum + "&wf_action=read&wf_docunid=" + docunid;
    location.href = url;
}

function RowClick(index) {
    $("#dg").datagrid("unselectAll");
    $("#dg").datagrid("selectRow", index);
}

function NewDoc() {
    var url = "form?wf_num=" + FormNum;
    location.href = url;
}

function DeleteDoc() {
    GridDeleteDoc($("#dg"));
}

function CopyDoc() {
    GridCopyDoc($("#dg"));
}

function btnClick(btnid) {
    GridBtnClick($("#dg"), btnid);
}
