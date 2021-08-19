### INTRODUCTION<br>

<p style="text-indent:50px; text-align: justify;">In a multiprogramming system, a set of processes will be running at all times, to maximize the CPU utilization, unlike a single-processor system in which only one process can run at a time and other processes have to wait until the CPU is freed and rescheduled. The waiting time is wasted as no useful work is accomplished by the CPU in single-processor systems. In a multiprogramming system, the operating system takes the CPU away from the process which has to wait and gives the CPU to another process. Scheduling of CPU is central to operating system design as it is one of the primary computer resources. <b>Process scheduling</b> is the way of executing processes in some order resulting in better utilization of time and resources.</p>

#### CPU-I/O Burst Cycle :
<p style="text-indent:50px; text-align: justify;">Execution of a process consists of a cycle of CPU execution and I/0 wait. Each process alternates between these two states.  Execution of a process begins with a CPU burst, followed by an I/O burst. Then it is followed by another CPU burst, which is followed by another I/0 burst, and so on. This process is repeated until the final CPU burst ends with a system request to terminate execution. The durations of CPU bursts vary largely from process to process and from computer to computer.</p>

#### CPU Scheduler :
<p style="text-indent:50px; text-align: justify;">Whenever the CPU is inactive, the operating system must select one of the processes in the ready queue to be executed. The CPU scheduler (or short-term scheduler) selects a process from the processes in memory that are ready to execute and allocates the CPU to that process. A ready queue need not be only a FIFO queue, it can be implemented as a priority queue, a tree, or simply an unordered linked list. The records in the queues are generally process control blocks (PCBs) which are used by computer operating systems to store all the information about a process.</p>

#### Pre-emptive Scheduling :
<p style=" text-align: justify;">Under one of the following four conditions, the CPU scheduling decisions take place.</p>
<ol style="text-align: justify;">
<li>When a process switches its state from the running state to the waiting state (for example, as the result of an I/0 request or an invocation of wait for the termination of one of the child processes)</li>
<li>When a process switches its state from the running state to the ready state (for example, when an interrupt occurs)</li>
<li>When a process switches its state from the waiting state to the ready state(for example, at completion of I/0)</li>
<li>When a process finishes its execution and terminates</li>
</ol>

<p style="text-indent:50px; text-align: justify;"> In conditions 1 and 4 a new process must be selected for execution. For conditions 2 and 3 there is a choice that is to either continue running the current process, or select a different one. If scheduling takes place only under circumstance 1 and 4 then the system is said to be <b>non pre-emptive</b>, or <b>cooperative</b>. Under these circumstances, once a process starts running it keeps running, until it either voluntarily blocks or until it finishes. Otherwise the system is said to be <b>pre-emptive</b>. In pre-emptive scheduling, problems can arise when two processes share data, because one process may get interrupted in the middle of updating shared data structures.</p>

#### Dispatcher :
<p style="text-align: justify;">The dispatcher is the module that gives control of the CPU to the process selected by the CPU scheduler. This function involves the following:
<ul>
  <li>Switching </li>
  <li>Switching to user mode</li>
  <li>Jumping to the proper location in the user program in order to restart that program</li>
</ul>

As the dispatcher is invoked during every process switch, it should be as fast as possible. The time  taken by the dispatcher to stop one process and start the another running is known as <b>dispatch latency</b>.</p>

#### Scheduling criteria :
<p style="text-align: justify;">Many criteria have been considered for comparing CPU-scheduling algorithms. The criteria include the following:
<ul>
<li style="text-align: justify;"><b>CPU utilization :</b> It can range from 0 to 100 percent. In a real system, it should range from 40 percent to 90 percent depending on load on the system.</li>
<li style="text-align: justify;"><b>Throughput :</b> The number of processes that are completed per time unit is called throughput. For long processes, throughput rate may be one process per hour; for short processes, it may be ten processes per second.</li>
<li style="text-align: justify;"><b>Turnaround time :</b> The time period from the submission of a process to completion is the turnaround time. The total time taken by a process waiting to get into memory, waiting in the ready queue, executing on the CPU, and doing I/0 is turnaround time.</li>
<li style="text-align: justify;"><b>Waiting time :</b> The amount of time that a process spends waiting in the ready queue is waiting time.</li>
<li style="text-align: justify;"><b>Response time :</b> The time interval from the submission of a request until the first response is produced is called response time.</li>
</ul>
</p>

#### Scheduling algorithms :
Various types of Scheduling algorithms are available. They are as follows:
1. First-Come, First-Served Scheduling
2. Shortest-Job-First Scheduling
3. Shortest-Remaining-Time-First scheduling
4. Priority Scheduling
5. Round-Robin Scheduling


1. <p style="text-align: justify;"><b>First-Come, First-Served (FCFS) Scheduling :</b> This is the simplest CPU scheduling algorithm. This algorithm schedules the processes based on its arrival. The process which requests the CPU first will be allocated with the resource first. The allocation is managed with a FIFO (First In, First Out) queue. This is a non pre-emptive scheduling algorithm in which a process keeps the CPU until it releases the CPU. Disadvantage of this algorithm is the average waiting time is long.</br>
Example:</br>
Process = [P1,P2,P3,P4,P5]</br>
Arrival Time = [6,3,8,3,4]</br>
Burst time = [2,5,1,0,4]</br>
Output:</br>
Execution sequence = [P4,P3,P1,P5,P2]</p>

2. <p style="text-align: justify;"><b>Shortest-Job-First (SJF) Scheduling :</b> Scheduling depends on the length of the next CPU burst of a process. When the CPU is idle, it is assigned to the process with the smallest next CPU burst. If the next CPU bursts of two processes are the same, then scheduling is made based on the FCFS algorithm. This is a non pre-emptive scheduling algorithm. Processes with large burst cycles may starve if many short burst time processes are arriving continuously in the ready queue.</br>
Example:</br>
Process = [P1,P2,P3,P4,P5]</br>
Arrival Time = [6,2,8,3,4]</br>
Burst time = [2,5,1,0,4]</br>
Output:</br>
Execution sequence = [P4,P1,P2,P5,P3]</p>

3. <p style="text-align: justify;"><b>Shortest-Remaining-Time-First Scheduling :</b> It is the pre-emptive form of SJF scheduling algorithm.
This algorithm will pre-empt the execution of the currently running process if the newly arrived process has less CPU burst than the current process. Shortest-remaining-time-first scheduling requires accurate estimates of the runtime of each process. This type of scheduling is difficult to implement as the operating system is required to frequently monitor the CPU time of the jobs in the ready queue and perform context switching.</br>
Example:</br>
Process = [P1,P2,P3,P4,P5,P6]</br>
Arrival Time = [7, 4, 9, 3, 8, 5]</br>
Burst time = [1, 6, 2, 8, 1, 4]</br>
Output:</br>
Execution sequence (Process, from time , to time) = [ (idle,0,3), (p4,3,4), (p2,4,5), (p6,5,7),(p1,7,8), (p5,8,9), (p3,9,11), (p6,11,13), (p2,13,18), (p4,18,25) ]</p>

4. <p style="text-align: justify;"><b>Priority Scheduling :</b> Every process is associated with its priority. In priority scheduling algorithms, the processes are scheduled based on the priority that is, the CPU is allocated to the process with the highest priority. Processes with equal-priority are scheduled in the FCFS order. Priorities are generally indicated by some fixed range of numbers. Priorities can be defined in two ways either internally or externally. Examples for internally defined priorities are time limits, memory requirements, the number of open files, and the ratio of average I/0 burst to average CPU burst and externally for defined priorities importance of the process, the type and amount of funds being paid for computer use, the department sponsoring the work, and other. <b>Indefinite blocking</b> or <b>starvation</b> is a major problem with priority scheduling algorithms. That is through this algorithm some high priority processes may prevent low priority processes from using CPU for running. <b>Aging</b> is the solution to this problem. Aging is a technique that increases the priority of the process that waits in the system for a long time. Under this algorithm, a low-priority job will eventually get its priority raised high enough that it gets run.</br>
Example:</br>
Process = [P1,P2,P3,P4,P5]</br>
Arrival Time = [10,1,2,1,5]</br>
Burst time = [3,1,4,5,2]</br>
Priority = [3,1,4,5,2]</br>
Output:</br>
Execution sequence (Consider all processes arrived at same time)  = [P2,P5,P1,P3,P4]</p>

5. <p style="text-align: justify;"><b>Round-Robin Scheduling :</b> A pre-emptive scheduling algorithm for time-sharing systems. The next process is selected based on the arrival time of the process. The process at the front of the ready queue is allocated the CPU for at most one quantum. Quantum is a fixed unit of time and its value can be like 10 ms or 50 ms. The process is pre-empted and appended to the ready queue, when the time has elapsed. It gives a fair chance to every process. Example : given n processes in the ready queue and time quantum q, each process gets q time of the CPU. No process waits for more than (n-1)q time units before getting CPU access where n is the number of processes.</br>
Example:</br>
Process = [P1,P2,P3]</br>
Burst Time = [24,3,3]</br>
Output:</br>
Execution sequence (Consider all processes arrived at time 0)  = [P2,P3,P1]</p>
