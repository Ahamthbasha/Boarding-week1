class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    print(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`)
        }
    }

    hasEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            return false
        }

        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    removeEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
            return false
        }

        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
        return true
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 'vertex not found'
        }

        for(let adjacencyVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacencyVertex)
        }

        delete this.adjacencyList[vertex]
    }

    bfs(start){
        let queue = []
        queue.push(start)
        let visitedNode = new Set()
        visitedNode.add(start)

        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }

    dfs(start,visitedNode = new Set()){
        visitedNode.add(start)
        console.log(start)
        for(let neighbor of this.adjacencyList[start]){
            if(!visitedNode.has(neighbor)){
                this.dfs(neighbor,visitedNode)
            }
        }
    }

    bfsCycleDetection(start){
        let queue = [{vertex:start,parent:null}]
        let visitedNode = new Set()
        visitedNode.add(start)

        while(queue.length){
            let {vertex,parent} = queue.shift()

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push({vertex:neighbor,parent:vertex})
                }
                else if(neighbor != parent){
                    console.log("cycle found")
                    return
                }
            }
        }
        console.log("cycle not found")
    }

    dfsCycleDetection(start,visitedNode = new Set(),parent = null){
        visitedNode.add(start)

        for(let neighbor of this.adjacencyList[start]){
            if(!visitedNode.has(neighbor)){
                if(this.dfsCycleDetection(neighbor,visitedNode,start)){
                    return true
                }
            }
            else if(neighbor != parent){
                return true
            }
        }

        return false
    }
}

const graph = new Graph()

// ---------- ADD VERTICES & EDGES ----------
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "D") // creates a cycle
graph.addEdge("E", "F") // separate component

console.log("Graph:")
graph.print()

// ---------- EDGE CHECK ----------
console.log("Has edge A-B:", graph.hasEdge("A","B")) // true
console.log("Has edge A-D:", graph.hasEdge("A","D")) // false

// ---------- BFS ----------
console.log("\nBFS from A:")
graph.bfs("A")
// A B C D

// ---------- DFS ----------
console.log("\nDFS from A:")
graph.dfs("A")
// A B D C (order may vary)

// ---------- BFS CYCLE DETECTION ----------
console.log("\nBFS Cycle Detection from A:")
graph.bfsCycleDetection("A")
// cycle found

console.log("\nBFS Cycle Detection from E:")
graph.bfsCycleDetection("E")
// cycle not found

// ---------- DFS CYCLE DETECTION ----------
console.log("\nDFS Cycle Detection from A:")
console.log(graph.dfsCycleDetection("A")) // true

console.log("\nDFS Cycle Detection from E:")
console.log(graph.dfsCycleDetection("E")) // false

// ---------- REMOVE EDGE ----------
graph.removeEdge("A", "B")
console.log("\nAfter removing edge A-B:")
graph.print()

// ---------- REMOVE VERTEX ----------
graph.removeVertex("C")
console.log("\nAfter removing vertex C:")
graph.print()
