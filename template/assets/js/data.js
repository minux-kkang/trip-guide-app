const tripData={
 meta:{title:"My Family Trip",destination:"Destination",startDate:"2027-01-01",endDate:"2027-01-05",version:"1.0",travelers:"성인 0 · 아동 0 · 유아 0"},
 days:[
  {day:1,date:"1/1",title:"Arrival Day",subtitle:"도착 · 체크인 · 휴식",originalPlan:[{time:"10:00",title:"첫 일정",desc:"최초 계획을 입력하세요."}],revisions:[],currentPlan:[{time:"10:00",title:"첫 일정",desc:"현재 운영안을 입력하세요."}],actualRecord:[]},
  {day:2,date:"1/2",title:"Split Day Example",subtitle:"A/B팀 분리 후 재합류",originalPlan:[{time:"09:00",title:"전원 함께 관광",desc:"원래는 한 팀으로 움직일 계획"}],revisions:[{at:"여행 중",reason:"연령/관심사 차이",summary:"오전 A/B팀으로 분리"}],currentPlan:[{type:"split",time:"09:00~14:00",a:{label:"A팀",items:[{time:"09:00",title:"A팀 일정",desc:"관광/쇼핑"}]},b:{label:"B팀",items:[{time:"09:00",title:"B팀 일정",desc:"아이 중심 일정"}]}},{time:"14:00",title:"호텔에서 합류",desc:"이후 공통 일정"}],actualRecord:[]}
 ],
 bookings:[{type:"항공",name:"Flight",status:"미입력",detail:"예약번호/시간"},{type:"호텔",name:"Hotel",status:"미입력",detail:"객실/체크인"}],
 shopping:[{item:"선물 후보",for:"대상",where:"구매처",status:"후보"}],
 food:[{name:"Restaurant",area:"Area",status:"후보",note:"메뉴/가족 반응"}],
 tips:["여행 중 알게 된 운영 팁을 누적하세요."],
 expenses:[{category:"교통",title:"예시",amount:0,currency:"SGD"}]
};