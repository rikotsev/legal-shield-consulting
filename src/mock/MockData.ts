import {Beans} from "../beans/Beans";


interface MockData {

    services: Beans.ServiceBean[]

}

class MockData implements MockData {
    constructor() {
    }
    /*
    services = [
        {"id": "service_1", "name": "Service 1", "price": 2.20, "description":"Description of Service 1", "options": [
            {
            "id": "option 1",
                "description": "desc",
                "price": 1.1
            },]},
        {"id": "service_2", "name": "Service 2", "price": 3.30, "description":"Description of Service 2", "options": [{}]},
        {"id": "service_3", "name": "Service 3", "price": 4.40, "description":"Description of Service 3", "options": [{}]}
        ];
     */
}

export default MockData;