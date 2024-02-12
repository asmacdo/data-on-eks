"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[7058],{5997:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var s=a(5893),n=a(1151);const t={sidebar_position:3,sidebar_label:"Observability Spark on EKS"},i="Observability Spark on EKS",o={id:"blueprints/data-analytics/observability-spark-on-eks",title:"Observability Spark on EKS",description:"Introduction",source:"@site/docs/blueprints/data-analytics/observability-spark-on-eks.md",sourceDirName:"blueprints/data-analytics",slug:"/blueprints/data-analytics/observability-spark-on-eks",permalink:"/data-on-eks/docs/blueprints/data-analytics/observability-spark-on-eks",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/data-analytics/observability-spark-on-eks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Observability Spark on EKS"},sidebar:"blueprints",previous:{title:"Spark Operator with YuniKorn",permalink:"/data-on-eks/docs/blueprints/data-analytics/spark-operator-yunikorn"},next:{title:"DataHub on EKS",permalink:"/data-on-eks/docs/blueprints/data-analytics/datahub-on-eks"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying the Solution",id:"deploying-the-solution",level:2},{value:"Set up data and py script",id:"set-up-data-and-py-script",level:2},{value:"Spark Web UI",id:"spark-web-ui",level:2},{value:"Spark History Server",id:"spark-history-server",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"Grafana",id:"grafana",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"observability-spark-on-eks",children:"Observability Spark on EKS"}),"\n",(0,s.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(r.p,{children:"In this post, we will learn the Observability for Spark on EKS. We will use Spark History Server to watch Spark Applications logs and check the Spark job progress via the Spark Web UI. Amazon Managed Service for Prometheus is used to collect and store the metrics generated by Spark Applications and Grafana is used to build dashboards for monitoring use cases."}),"\n",(0,s.jsx)(r.h2,{id:"deploying-the-solution",children:"Deploying the Solution"}),"\n",(0,s.jsxs)(r.p,{children:["We will reuse the previous Spark on Operator example. Please follow ",(0,s.jsx)(r.a,{href:"https://awslabs.github.io/data-on-eks/docs/data-analytics/spark-operator-yunikorn#deploying-the-solution",children:"this link"})," to provision resources"]}),"\n",(0,s.jsx)(r.h2,{id:"set-up-data-and-py-script",children:"Set up data and py script"}),"\n",(0,s.jsx)(r.p,{children:"let's navigate to one example folder under spark-k8s-operator and run the shell script to upload data and py script to the S3 bucket created by terraform above."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"cd data-on-eks/analytics/terraform/spark-k8s-operator/examples/cluster-autoscaler/nvme-ephemeral-storage\n\n# replace \\<S3_BUCKET\\> with your S3 bucket and \\<REGION\\> with your region, then run\n./taxi-trip-execute.sh\n"})}),"\n",(0,s.jsx)(r.h2,{id:"spark-web-ui",children:"Spark Web UI"}),"\n",(0,s.jsxs)(r.p,{children:["When you submit a Spark application, Spark context is created which ideally gives you ",(0,s.jsx)(r.a,{href:"https://sparkbyexamples.com/spark/spark-web-ui-understanding/",children:"Spark Web UI"})," to monitor the execution of the application. Monitoring includes the following."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Spark configurations used"}),"\n",(0,s.jsx)(r.li,{children:"Spark Jobs, stages, and tasks details"}),"\n",(0,s.jsx)(r.li,{children:"DAG execution"}),"\n",(0,s.jsx)(r.li,{children:"Driver and Executor resource utilization"}),"\n",(0,s.jsxs)(r.li,{children:["Application logs and many more ",(0,s.jsx)("br",{})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"When your application is done with the processing, Spark context will be terminated so your Web UI as well. and if you wanted to see the monitoring for already finished application, we cannot do it."}),"\n",(0,s.jsx)(r.p,{children:'To try Spark web UI, let\'s update <S3_BUCKET> with your bucket name and <JOB_NAME> with "nvme-taxi-trip" in nvme-ephemeral-storage.yaml'}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"  kubectl apply -f nvme-ephemeral-storage.yaml\n"})}),"\n",(0,s.jsx)(r.p,{children:"Then run port forward command to expose spark web service."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"kubectl port-forward po/taxi-trip 4040:4040 -nspark-team-a\n"})}),"\n",(0,s.jsx)(r.p,{children:"Then open browser and enter localhost:4040. You can view your spark application like below."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"img.png",src:a(1674).Z+"",width:"1888",height:"934"})}),"\n",(0,s.jsx)(r.h2,{id:"spark-history-server",children:"Spark History Server"}),"\n",(0,s.jsx)(r.p,{children:"As mentioned above, spark web UI will be terminated once the spark job is done. This is where Spark history Server comes into the picture, where it keeps the history (event logs) of all completed applications and its runtime information which allows you to review metrics and monitor the application later in time."}),"\n",(0,s.jsx)(r.p,{children:"In this example, we installed Spark history Server to read logs from S3 bucket. In your spark application yaml file, make sure you have the following setting:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-yaml",children:'    sparkConf:\n        "spark.hadoop.fs.s3a.aws.credentials.provider": "com.amazonaws.auth.InstanceProfileCredentialsProvider"\n        "spark.hadoop.fs.s3a.impl": "org.apache.hadoop.fs.s3a.S3AFileSystem"\n        "spark.eventLog.enabled": "true"\n        "spark.eventLog.dir": "s3a://<your bucket>/logs/"\n'})}),"\n",(0,s.jsx)(r.p,{children:"Run port forward command to expose spark-history-server service."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"kubectl port-forward services/spark-history-server 18085:80 -n spark-history-server\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Then open browser and enter localhost:18085. You can view your spark history server like below.\n",(0,s.jsx)(r.img,{alt:"img.png",src:a(2297).Z+"",width:"1894",height:"500"})]}),"\n",(0,s.jsx)(r.h2,{id:"prometheus",children:"Prometheus"}),"\n",(0,s.jsx)(r.p,{children:"Spark users must add the following config to spark application yaml file to extract the metrics from Spark Driver and Executors. In the example, they are added into nvme-ephemeral-storage.yaml already."}),"\n",(0,s.jsxs)(r.p,{children:['"spark.ui.prometheus.enabled": "true"\n"spark.executor.processTreeMetrics.enabled": "true"\n"spark.kubernetes.driver.annotation.prometheus.io/scrape": "true"\n"spark.kubernetes.driver.annotation.prometheus.io/path": "/metrics/executors/prometheus/"\n"spark.kubernetes.driver.annotation.prometheus.io/port": "4040"\n"spark.kubernetes.driver.service.annotation.prometheus.io/scrape": "true"\n"spark.kubernetes.driver.service.annotation.prometheus.io/path": "/metrics/driver/prometheus/"\n"spark.kubernetes.driver.service.annotation.prometheus.io/port": "4040"\n"spark.metrics.conf.',(0,s.jsx)(r.em,{children:'.sink.prometheusServlet.class": "org.apache.spark.metrics.sink.PrometheusServlet"\n"spark.metrics.conf.'}),'.sink.prometheusServlet.path": "/metrics/driver/prometheus/"\n"spark.metrics.conf.master.sink.prometheusServlet.path": "/metrics/master/prometheus/"\n"spark.metrics.conf.applications.sink.prometheusServlet.path": "/metrics/applications/prometheus/"']}),"\n",(0,s.jsx)(r.p,{children:"Run port forward command to expose prometheus service."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"kubectl  port-forward service/prometheus-server   8080:80 -n prometheus\n"})}),"\n",(0,s.jsxs)(r.p,{children:["Then open browser and enter localhost:8080. You can view your prometheus server like below.\n",(0,s.jsx)(r.img,{alt:"img.png",src:a(4769).Z+"",width:"1911",height:"762"})]}),"\n",(0,s.jsx)(r.h2,{id:"grafana",children:"Grafana"}),"\n",(0,s.jsx)(r.p,{children:"Grafana has been installed. Use the command below to access with port forward."}),"\n",(0,s.jsx)(r.h1,{id:"get-grafana-password",children:"get grafana password"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"kubectl  port-forward service/grafana 8080:80 -n grafana  \n"})}),"\n",(0,s.jsx)(r.p,{children:"login username is admin and password can get from secrets manager. You can import dashboard with ID: 7890."}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"img.png",src:a(5704).Z+"",width:"1897",height:"796"})})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4769:(e,r,a)=>{a.d(r,{Z:()=>s});const s=a.p+"assets/images/prometheus-spark-6b44472f727a400ea97c3e78dae319a1.png"},5704:(e,r,a)=>{a.d(r,{Z:()=>s});const s=a.p+"assets/images/spark-grafana-dashboard-663f9623e038dc15be3cab6e7d6d14ef.png"},2297:(e,r,a)=>{a.d(r,{Z:()=>s});const s=a.p+"assets/images/spark-history-server-e3a6062c788ed738fa1a4b7ab7f64b26.png"},1674:(e,r,a)=>{a.d(r,{Z:()=>s});const s=a.p+"assets/images/spark-web-ui-734c4ac84186b9491042d11b78098303.png"},1151:(e,r,a)=>{a.d(r,{Z:()=>o,a:()=>i});var s=a(7294);const n={},t=s.createContext(n);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);