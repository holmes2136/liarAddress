﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Demo.aspx.cs" Inherits="Demo" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="css/select2.css" rel="stylesheet" type="text/css" />
    <link href="css/liarAddress.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <form id="form1" runat="server">
    <div>
		<div id="sample"></div>

        
    </div>
    </form>
</body>
    <script type="text/javascript" src="Scripts/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="Scripts/jquery.liarAddress.js"></script>
    <script type="text/javascript" src="Scripts/select2.js"></script>
    <script type="text/javascript" src="Scripts/liar.zipMenu.js"></script>
    <script type="text/javascript" src="Scripts/underscore-1.4.1.js"></script>
    <script type="text/javascript">

        $("#sample").simpAddr();

    </script>
</html>
