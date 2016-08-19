// The constructor is nice and straightforward. The linked list has a length, and a head. The head will always contain the first node.
//
//Refer to the presentation slides http://thinkful.slides.com/thinkful/linked-lists#
//
var LinkedList = function() {
  this.length = 0;
  this.head = null;
  // In this case we start with an empty first node, represented by null.
};

LinkedList.prototype.insert = function( index, value ) {
  if ( index < 0 || index > this.length ) {
    throw new Error( 'Index error' );
  }

  // To insert a value into the linked list, you first create a new node represented by a JavaScript object. This will contain two properties: value, which will hold the value, and next, which will hold the link to the next node.
  var newNode = {
    value: value
  };

  if ( index == 0 ) {
    newNode.next = this.head;
    // If you are inserting the value into the start of the list, then you set the new node's next value to the current head of the list
    this.head = newNode;
    // and you set the node to be the new head of the list.
  } else {
    // Find the node which we want to insert after
    var node = this._find( index - 1 );
    newNode.next = node.next;
    // Make green arrow (new L's next) equal to red arrow (first L's next)
    node.next = newNode;
    //This node.next refers to green arrow pointing at new 'L'
  }
  this.length++;
};

LinkedList.prototype._find = function( index ) {
  var node = this.head;
  for ( var i = 0; i < index; i++ ) {
    // This simply iterates through the nodes jumping to next one each time until the correct node has been found.
    node = node.next;
  }
  return node;
};

//
// RETRIEVAL
// Retrieves value using find method
//
LinkedList.prototype.get = function( index ) {
  if ( index < 0 || index >= this.length ) {
    throw new Error( 'Index error' );
  }

  return this._find( index ).value;
};

//
//REMOVAL
//
LinkedList.prototype.remove = function( index ) {
  if ( index < 0 || index >= this.length ) {
    throw new Error( 'Index error' );
  }

  if ( index == 0 ) {
    this.head = this.head.next;
  } else {
    // Find the node before the one we want to remove
    var node = this._find( index - 1 ); // The node preceeding what we want to remove
    node.next = node.next.next; // The 'node' above changes its' node.next pointer to skip the deleted node
  }

  this.length--;
};


// Write an algorithm to find the middle element of a linked list
// [{value: H, next: X}, {E}, {L}, {L}, {O}]
LinkedList.prototype.middleElement = function() {
  return this._find( Math.floor( this.length / 2 ) ).value;
};

// Write an algorithm to find the third element from the end of a linked list
LinkedList.prototype.thirdElementEnd = function() {
  return this._find( this.length - 2 ).value;
};

// Write an algorithm to reverse a linked list
LinkedList.prototype.reverse = function() {
  while() {
    var newNode = {
      value: value
    };
  }
//H-E-L-L-O
// O-L-L-E-H
  // newNode = this.head; //
  // node.next = this.head; /
  // newNode = this.head /
  // this.head = node.next /
  // newNode = this.head /
  

  // node.next = newNode


  newNode.next = this.head;
  this.head = newNode;
};

// Write an algorithm to find whether a linked list has a cycle (i.e. whether a node in the list has its next value pointing to an earlier node in the list)
