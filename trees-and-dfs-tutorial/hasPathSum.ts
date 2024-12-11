function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let confirm = false;


    function sumNodes(sum:number, root: TreeNode | null){
        
        if (root === null) return;
        console.log('->',root.val, sum)

        if(!root?.left && !root?.right){
            if(sum === targetSum) confirm = true;
        } 
        if(root?.left){
            sumNodes(root.left.val + sum, root.left)
        };
        if(root?.right){
            sumNodes(root.right.val + sum, root.right)
        };
    }


    if (root && root.left) {
        sumNodes(0, root);
    }    
    return confirm;
    
};

hasPathSum(root, 7);