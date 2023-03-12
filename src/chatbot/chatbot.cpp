#include<iostream>
#include<vector>
#include<string>
#include<unordered_set>
#include<queue>

using namespace std;

int main(){
    vector<string> questions(11);

    unordered_set<string> data;

    questions[0] = "What are your area of interests? \n 1) AI \n 2) Machine Learning \n 3) Web development \n 4) Big Data Analysis \n 5) Block Chain \n" ;

    questions[1] = "Have you worked before? \n 1) yes \n 2) no\n";

    questions[2] = "What are you known for? \n 1) Engineer \n 2) Analyst\n";

    questions[3] = "What type of engineer are you? \n 1) Software Engineer \n 2) Hardware Engineer \n 3) Data Engineer\n";

    questions[4] = "Which areas of development are you proficient in? \n 1) Frontend \n 2) Backend \n 3) Full-stack\n";

    questions[5] = "Which technologies are you familiar with? \n 1) Software Frameworks \n 2) Databases \n 3) Hardware Components\n";

    questions[6] = "which databases have you worked with? \n 1) Mysql \n 2) MongoDB \n 3) Oracle \n 4) PostgreSql\n";

    questions[7] = "Which tools/frameworks have you worked with? \n 1) React 2) Angular 3) VueJs\n";

    questions[8] = "Which analyst did you work as? \n 1) Data Analyst \n 2) Business Analyst \n 3) System Analyst\n";

    questions[9] = "Which data analysis tools have you worked with? \n 1) TensorFlow 2) NumPy 3) SciPy 4) Pandas\n";


    
    vector<vector<vector<int> > > adj(1000, vector<vector<int> >(1000, vector<int>(1000)));

    adj[0][1].push_back(9); 
    adj[0][3].push_back(4); 
    adj[0][4].push_back(9); 
    

    adj[1][1].push_back(2);  
    adj[1][1].push_back(5);
    adj[1][2].push_back(5);

    adj[2][1].push_back(3);  
    adj[2][2].push_back(8);

    adj[3][1].push_back(4); 
    adj[3][3].push_back(5);
    adj[3][3].push_back(6);
    adj[3][3].push_back(9);

    adj[4][1].push_back(7); 
    adj[4][2].push_back(6) ; 
    adj[4][3].push_back(6);
    adj[4][3].push_back(7);
     

    adj[5][1].push_back(7); 
    adj[5][2].push_back(6); 



    adj[8][1].push_back(9); 
    adj[8][2].push_back(9); 

    vector<bool> visited(11,false);
    queue<int> q;

    q.push(0);
    q.push(1);
    visited[0] = true;
    visited[1] = true;
    
    while(!q.empty()){
        int current = q.front();
        string current_question = questions[current];
        q.pop();

        int ans;
        cout<<current_question;
        cin>>ans;

        for(int i = 0;i<adj[current][ans].size();i++){
            if(!visited[adj[current][ans][i]]){
                visited[adj[current][ans][i]] =true;
                q.push(adj[current][ans][i]);
            }
        }
    }
    cout<<"Thanks"<<endl;
    return 0;
}