const maxStarArr = [8,10,15,20,25,25,25,25,25,25];
const MVP_SALE = [0,3,5,10,15];
const costDB = [
    [36, 36, 37, 38, 51, 58, 60, 60, 0],//100
    [48, 48, 49, 50, 65, 72, 74, 74, 89, 90, 0],//110
    [57, 57, 58, 59, 76, 83, 85, 85, 102, 103, 144, 145, 164, 165, 167, 0],//120
    [60, 60, 61, 62, 79, 86, 88, 88, 105, 106, 147, 148, 167, 168, 170, 19586000, 23069100, 26918600, 31149300, 35776100, 0],//130
    [70, 70, 71, 72, 91, 98, 100, 100, 119, 120, 161, 162, 183, 184, 186, 195, 215, 216, 38904500, 44683300, 50974700, 57796700, 65166700, 73102200, 81620200, 0],//140
    [93, 93, 94, 95, 126, 154, 156, 156, 187, 188, 250, 251, 284, 285, 12638500, 30087200, 35437900, 41351400, 47850600, 54958200, 62696400, 441, 80152000, 89912300, 100389000, 0], //150
    [164800, 328700, 492500, 656400, 820200, 984000, 187, 187, 1475600, 1639400, 6639400, 8397300, 10422900, 12731500, 15338200, 36514500, 43008300, 50185100, 58072700, 66698700, 76090000, 86273300, 97274600, 109120000, 121834900, 0], //160
    [93, 93, 94, 95, 126, 154, 156, 156, 187, 188, 250, 251, 284, 285, 12638500, 30087200, 35437900, 41351400, 47850600, 54958200, 62696400, 441, 80152000, 89912300, 100389000, 0], //170
    [164800, 328700, 492500, 656400, 820200, 984000, 187, 187, 1475600, 1639400, 6639400, 8397300, 10422900, 12731500, 15338200, 36514500, 43008300, 50185100, 58072700, 66698700, 76090000, 86273300, 97274600, 109120000, 121834900, 0], //180
    [321000, 641000, 961000, 1281000, 1601000, 1921000, 2241000, 2561000, 2881000, 3201000, 12966500, 16400100, 20356300, 24865300, 29956500, 71316500, 83999600, 98016700, 113422300, 130270000, 1003, 1008, 189988600, 213124000, 237957700, 0] //200
];
const itemImgDB = ["100", "110", "120", "130", "140", "150", "160", "170", "180", "200"]
const percentDB = [   //[成功, 保持, 下降, 损坏]
    [850, 150, 0, 0], //0->1
    [800, 200, 0, 0], //1->2
    [750, 250, 0, 0], //2->3
    [700, 300, 0, 0], //3->4
    [650, 350, 0, 0], //4->5
    [600, 400, 0, 0], //5->6
    [600, 0, 400, 0], //6->7
    [550, 0, 450, 0], //7->8
    [500, 0, 500, 0], //8->9
    [450, 0, 550, 0], //9->10
    [350, 650, 0, 0], //10->11
    [250, 0, 738, 12],//11->12
    [200, 0, 776, 24],//12->13
    [200, 0, 768, 32],//13->14
    [200, 0, 760, 40],//14->15
    [200, 752, 0, 48],//15->16
    [200, 0, 744, 56],//16->17
    [200, 0, 736, 64],//17->18
    [150, 0, 773, 77],//18->19
    [150, 0, 773, 77],//19->20
    [150, 748, 0, 102],//20->21
    [100, 0, 765, 135],//21->22
    [30, 0, 776, 194],//22->23
    [20, 0, 686, 294],//23->24
    [10, 0, 594, 396],//24->25
    [0, 0, 0, 0]
];
