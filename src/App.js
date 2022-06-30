import * as XLSX from "xlsx";
import './App.css';
function App() {
  const data = {
    "id": 112,
    "name": "Phúc test báo cáo 2",
    "code": "KH02",
    "publish_day": "05-05-2022",
    "publish_time": "1",
    "representative_name": "Hải",
    "address": "Kcn Yên Phong",
    "construction_id": 10,
    "frequency": 3,
    "valid_date": "05-06-2022",
    "hicon_comment": "ddddd",
    "customer_comment": "asdsadasdasd",
    "created_at": "2022-06-30T12:07:00.000000Z",
    "updated_at": "2022-06-30T12:07:00.000000Z",
    "task": [
      {
        "id": 68,
        "report_id": 112,
        "name": "Thiết bị 1",
        "description": "Mô tả thiết bị 1",
        "photo": "",
        "created_at": "2022-06-30T12:07:00.000000Z",
        "updated_at": "2022-06-30T12:07:00.000000Z",
        "report_task": [
          {
            "id": 58,
            "report_id": 112,
            "task_id": 68,
            "photo": "images\/2G3ThGHFzeulh0U8bdqwBEyO5lkh8IAG39oUUl3p.jpg",
            "created_at": "2022-06-30T12:07:00.000000Z",
            "updated_at": "2022-06-30T12:07:00.000000Z"
          },
          {
            "id": 59,
            "report_id": 112,
            "task_id": 68,
            "photo": "images\/FufS1BxxLrleal0y0nTej0Z7bAFjXo9bclaNjUmO.jpg",
            "created_at": "2022-06-30T12:07:00.000000Z",
            "updated_at": "2022-06-30T12:07:00.000000Z"
          }
        ]
      },
      {
        "id": 69,
        "report_id": 112,
        "name": "Thiết bị 1",
        "description": "Mô tả thiết bị 2",
        "photo": "",
        "created_at": "2022-06-30T12:07:00.000000Z",
        "updated_at": "2022-06-30T12:07:00.000000Z",
        "report_task": [
          {
            "id": 60,
            "report_id": 112,
            "task_id": 69,
            "photo": "images\/2ZunZG2Y5Y6c9UjPUIBgUxefz0EVJL1xl7t01Zri.jpg",
            "created_at": "2022-06-30T12:07:00.000000Z",
            "updated_at": "2022-06-30T12:07:00.000000Z"
          }
        ]
      }
    ],
    "item": [
      {
        "id": 46,
        "report_id": 112,
        "item_name": "Ổ điện",
        "item_unit": "cái",
        "item_quantity": 1,
        "created_at": "2022-06-30T12:07:00.000000Z",
        "updated_at": "2022-06-30T12:07:00.000000Z"
      },
      {
        "id": 47,
        "report_id": 112,
        "item_name": "Phích cắm",
        "item_unit": "cái",
        "item_quantity": 2,
        "created_at": "2022-06-30T12:07:00.000000Z",
        "updated_at": "2022-06-30T12:07:00.000000Z"
      }
    ],
    "construction": {
      "id": 10,
      "name": "LS Bắc Ninh",
      "period": null,
      "address": "Kcn Yên Phong",
      "service_id": 16,
      "service_type_id": 3,
      "status": 3,
      "person_in_charge": "Mr. Bình",
      "representative": "Hải",
      "representative_tel": "0968095072",
      "representative_mail": "hai.phamduc@hiconmne.vn",
      "created_by": null,
      "updated_by": null,
      "created_at": "2022-04-26T01:29:06.000000Z",
      "updated_at": "2022-06-29T17:04:01.000000Z"
    }
  }
  const downloadExcel = (data) => {
    const dataConvert = data?.task?.map((_elt, index) => {
      return {
        "TT": index + 1,
        "Thiết bị bảo trì": _elt.name,
        // "Hình ảnh bảo trì": `=IMAGE("http://efdreams.com/data_images/dreams/lion/lion-03.jpg")`,
        "Mô tả công việc bảo trì": _elt.description
      }

    })
    const headerTitle1 = `\n Báo cáo ngày ${data.name}`;
    const sheet = XLSX.utils.json_to_sheet([], {
      header: [headerTitle1],
      origin: "A2"
    });

    const worksheet = XLSX.utils.sheet_add_json(sheet, dataConvert, { origin: 'A3' });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  return (
    <button onClick={() => downloadExcel(data)}>
      Download As Excel
    </button>
  );
}

export default App;
