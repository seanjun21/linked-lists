// The constructor is nice and straightforward. The linked list has a length, and a head. The head will always contain the first node. 

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
    node.next = newNode;
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
