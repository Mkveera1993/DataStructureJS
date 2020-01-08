//Data Structure 

/* LinkedList */

class Node{  
  constructor(element){
    this.element=element;
    this.next=null;
  }    
}

class LinkedList{  
  constructor(){
    this.head=null;
    this.size=0
  } 
  
  
 
  
  add(element)
    {
      let node=new Node(element);   
      let current;      
      if(this.head==null){
        this.head=node;
      }else{
        current=this.head;        
        while(current.next){
          current=current.next
        }
        current.next=node; 
      }      
        this.size++; 
    } 
  
  insertAt(element,index){
      if(index>0 && index >this.size){
        return false;
      }else{
        let node =new Node(element);
        let current,previous;
        
        if(index===0){
          node.next=this.head;
          this.head=node;
        }else{
          current=this.head;
          let it=0;
          while(it<index){
            it++;
            previous=current;
            current=current.next;
          }
          node.next=current;
          previous.next=node;          
        }
        this.size++;
      }
  }
  
  removeAt(index){
    if(index>0 && index>this.size){
      return -1;
    }else{
      let current,previous,it=0;
      current=this.head;
      previous=current;
      
      if(index===0){
        this.head=current.next;
      }else{
        while(it<index){
            it++;
            previous=current;
            current=current.next;
          }      
          previous.next=current.next;      
        }
        this.size--;
        return current.element;
    }
  }
  
  
  removeElement(element){
    let current=this.head;
    let previous=null;
    
    while(current.next !==null){
            if(current.element===element){
              if(previous===null){
              this.head=current.next;        
            }else{
              previous.next=current.next;
            }
            this.size--;
            return current.element;      
          }
          previous=current;
          current=current.next;        
      }
          return -1;
  }
  
  indexOf(element){
    let count=0;
    let current=this.head;
    
    while(current!==null){
      
      if(current.element===element){
        return count;
      }else{
        current=current.next;
        count++;
      }
    }
    return -1;
  }
  
  
  elementAt(index){    
     if(index<0 && index >this.size){
       return -1;
     }else if(index===0){
       return this.head;
     }else{
       let current,previous,it=0;
        current=this.head;
        previous=current;

        if(index===0){
          this.head=current.next;
        }else{
          while(it<index){
              it++;
              previous=current;
              current=current.next;
            }      
            previous.next=current.next;      
          }
         return current.element;
     }  
  }
  
  isEmpty() 
  { 
      return this.size === 0; 
  } 
  
  printList(){
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str += curr.element + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
    return str;
  }
  
  
  
  
  
  
}
  
let ll0=new LinkedList();
ll0.add(10);
ll0.add(20);
ll0.add(30);
ll0.add(50);
ll0.insertAt(40,3);

console.log(ll0.printList())




