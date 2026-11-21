export const  first_test=[
    {
        "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
        "name": "测试Agent",
        "type": "model",
        "color": "#73d13d",
        "x": 508.0092544555664,
        "y": 330.0092544555664,
        "select": false,
        "locked": false,
        "pendant": {
            "data": {
                "type": "model",
                "detail": {
                    "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                    "model": {
                        "module": "sys",
                        "modelTitle": "测试Agent",
                        "name": "feetechSixAxisArm",
                        "ifOpen": 0,
                        "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                        "pk": [
                            "id"
                        ],
                        "fields": [
                            {
                                "notes": "测试AgentID",
                                "name": "id",
                                "length": "32",
                                "type": "String",
                                "fieldTitle": "测试AgentID"
                            },
                            {
                                "notes": "名称",
                                "editable": true,
                                "notnull": false,
                                "name": "name",
                                "length": "32",
                                "fieldTitle": "名称",
                                "type": "String",
                                "filterTypes": [
                                    "equal"
                                ]
                            },
                            {
                                "notes": "端口",
                                "editable": true,
                                "notnull": false,
                                "name": "port",
                                "length": "32",
                                "fieldTitle": "端口",
                                "type": "String",
                                "filterTypes": [
                                    "equal"
                                ]
                            },
                            {
                                "notes": "更新时间",
                                "editable": false,
                                "defaultValue": "current_timestamp()",
                                "notnull": true,
                                "extra": "ON UPDATE current_timestamp()",
                                "name": "gmtUpdate",
                                "length": "0",
                                "type": "DateTime",
                                "fieldTitle": "更新时间",
                                "filterTypes": [
                                    "between"
                                ]
                            },
                            {
                                "notes": "创建时间",
                                "editable": false,
                                "defaultValue": "current_timestamp()",
                                "notnull": true,
                                "name": "gmtCreate",
                                "length": "0",
                                "type": "DateTime",
                                "fieldTitle": "创建时间",
                                "filterTypes": [
                                    "between"
                                ]
                            }
                        ],
                        "order": "gmtCreate desc"
                    },
                    "component": {
                        "id": "@net.sosn.robotic.arm/feetechSixAxisArm",
                        "modelId": "@net.sosn.robotic.arm/feetechSixAxisArm",
                        "isCollapse": false,
                        "x": 508.0092544555664,
                        "y": 330.0092544555664
                    },
                    "fields": [
                        {
                            "field": {
                                "notes": "测试AgentID",
                                "name": "id",
                                "length": "32",
                                "type": "String",
                                "fieldTitle": "测试AgentID"
                            }
                        },
                        {
                            "field": {
                                "notes": "名称",
                                "editable": true,
                                "notnull": false,
                                "name": "name",
                                "length": "32",
                                "fieldTitle": "名称",
                                "type": "String",
                                "filterTypes": [
                                    "equal"
                                ]
                            }
                        },
                        {
                            "field": {
                                "notes": "端口",
                                "editable": true,
                                "notnull": false,
                                "name": "port",
                                "length": "32",
                                "fieldTitle": "端口",
                                "type": "String",
                                "filterTypes": [
                                    "equal"
                                ]
                            }
                        },
                        {
                            "field": {
                                "notes": "更新时间",
                                "editable": false,
                                "defaultValue": "current_timestamp()",
                                "notnull": true,
                                "extra": "ON UPDATE current_timestamp()",
                                "name": "gmtUpdate",
                                "length": "0",
                                "type": "DateTime",
                                "fieldTitle": "更新时间",
                                "filterTypes": [
                                    "between"
                                ]
                            }
                        },
                        {
                            "field": {
                                "notes": "创建时间",
                                "editable": false,
                                "defaultValue": "current_timestamp()",
                                "notnull": true,
                                "name": "gmtCreate",
                                "length": "0",
                                "type": "DateTime",
                                "fieldTitle": "创建时间",
                                "filterTypes": [
                                    "between"
                                ]
                            }
                        }
                    ],
                    "familyId": "net.sosn.robotic.arm",
                    "thirdParty": false,
                    "size": {
                        "width": 125,
                        "height": 75
                    }
                }
            }
        }
    }
]